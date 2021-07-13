import axios from "axios";
import { DateUtils } from "react-day-picker";
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

export function handleDayClick(day, range) {
  const newRange = DateUtils.addDayToRange(day, range);
  return {
    type: CHANGE_RANGEDATE,
    payload: newRange,
  };
}

export function reserve(AdvertisementId, range, roomie, paidReservation) {
  return async function (dispatch) {
    try {
      dispatch({ type: RESERVATION_LOADING });
      const { data } = await axios({
        method: "POST",
        baseURL: "http://localhost:8000",
        url: "/reservations",
        data: {
          AdvertisementId,
          range,
          roomie,
          paidReservation,
        },
      });
      dispatch({ type: RESERVATION_SUCCESS, payload: data });
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
        range: action.payload,
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
