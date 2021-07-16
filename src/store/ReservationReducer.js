import axios from "axios";
import { DateUtils, ModifiersUtils } from "react-day-picker";
import { useHistory } from "react-router-dom";
export const RESERVATION_LOADING = "RESERVATION_LOADING ";
export const RESERVATION_SUCCESS = "RESERVATION_SUCCESS";
export const RESERVATION_ERROR = "RESERVATION_ERROR";
export const RESERVATION_FINISHED = "RESERVATION_FINISHED";
export const CHANGE_RANGEDATE = "CHANGE_RANGEDATE";
export const CHANGE_ENDDATE = "CHANGE_ENDDATE";
export const BOOKEDDAYS_LOADING = "BOOKEDDAYS_LOADING";
export const BOOKEDDAYS_SUCCESS = "BOOKEDDAYS_SUCCESS";
export const BOOKEDDAYS_ERROR = "BOOKEDDAYS_ERROR";
export const BOOKEDDAYS_FINISHED = "BOOKEDDAYS_FINISHED";

export function handleDayClick(day, selectedDays, selected, disabled) {
  if (disabled) {
    window.alert("days already booked");
    return { type: "default" };
  }
  const selectedDaysOne = selectedDays.concat();
  if (selected) {
    const selectedIndex = selectedDaysOne.findIndex((selectedDay) =>
      DateUtils.isSameDay(selectedDay, day)
    );
    selectedDaysOne.splice(selectedIndex, 1);
  } else {
    selectedDaysOne.push(day);
  }

  return {
    type: CHANGE_RANGEDATE,
    payload: selectedDaysOne,
  };
}

export function Reserve(
  AdvertisementId,
  selectedDays,
  roomie,
  paidReservation
) {
  // const history = useHistory();
  console.log("selectedDays: ", selectedDays);
  return async function (dispatch) {
    try {
      dispatch({ type: RESERVATION_LOADING });
      const { data } = await axios({
        method: "POST",
        baseURL: "http://localhost:8000",
        url: "/reservations",
        data: {
          AdvertisementId,
          selectedDays,
          roomie,
          paidReservation,
        },
      });
      // history.push(`/advertisement/${AdvertisementId}`);
      dispatch({ type: RESERVATION_SUCCESS, payload: data });
      window.alert("Reservation Created");
    } catch (error) {
      dispatch({ type: RESERVATION_ERROR, payload: error });
    } finally {
      dispatch({ type: RESERVATION_FINISHED });
    }
  };
}

export function getBookedDays() {
  return async function (dispatch) {
    try {
      dispatch({ type: BOOKEDDAYS_LOADING });
      const { data } = await axios({
        method: "GET",
        baseURL: "http://localhost:8000",
        url: "/reservations",
      });
      dispatch({ type: BOOKEDDAYS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: BOOKEDDAYS_ERROR, payload: error });
    } finally {
      dispatch({ type: BOOKEDDAYS_FINISHED });
    }
  };
}

const initialState = {
  range: {
    from: undefined,
    to: undefined,
  },
  selectedDays: [],
  reserveLoading: false,
  reserveError: false,
  reservations: [],
  reservationsError: false,
};

function getInitialState() {
  return initialState.range;
}

function reservationReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_RANGEDATE: {
      return {
        ...state,
        selectedDays: action.payload,
      };
    }

    case RESERVATION_LOADING: {
      return {
        ...state,
        reserveLoading: true,
      };
    }
    case RESERVATION_SUCCESS: {
      return {
        ...state,
        reserveLoading: false,
      };
    }
    case RESERVATION_ERROR: {
      return {
        ...state,
        reserveError: true,
      };
    }
    case RESERVATION_FINISHED: {
      return {
        ...state,
        reserveLoading: false,
      };
    }
    case BOOKEDDAYS_ERROR: {
      return {
        ...state,
        reservationsError: true,
      };
    }
    case BOOKEDDAYS_SUCCESS: {
      return {
        ...state,
        reservations: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}

export default reservationReducer;
