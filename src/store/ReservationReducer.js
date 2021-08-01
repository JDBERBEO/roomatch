import axios from "axios";
import { DateUtils } from "react-day-picker";
import swal from 'sweetalert'
import { useHistory } from "react-router-dom";
export const RESERVATION_LOADING = "RESERVATION_LOADING ";
export const RESERVATION_SUCCESS = "RESERVATION_SUCCESS";
export const RESERVATION_ERROR = "RESERVATION_ERROR";
export const RESERVATION_FINISHED = "RESERVATION_FINISHED";
export const CHANGE_RANGEDATE = "CHANGE_RANGEDATE";
export const CHANGE_ENDDATE = "CHANGE_ENDDATE";


export function handleDayClick(day, selectedDays, selected, disabled) {
  if (disabled) {
    swal("days already booked","","warning");
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

export function reserve(
  living_space_type,
  advertisementId,
  selectedDays,
  paidReservation,
  history
) {

  return async function (dispatch) {
    try {
      dispatch({ type: RESERVATION_LOADING });
      const token = localStorage.getItem("token");
      const { data } = await axios({
        method: "POST",
        baseURL: "http://localhost:8000",
        url: "/reservations",

        data: {
          living_space_type,
          advertisementId,
          selectedDays,
          paidReservation,
        },
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch({ type: RESERVATION_SUCCESS, payload: data });
      
      swal("Reservation Created","","success").then(() => {
        history.push("/");
      });
      
      
    } catch (error) {
      dispatch({ type: RESERVATION_ERROR, payload: error });
    } finally {
      dispatch({ type: RESERVATION_FINISHED });
    }
  };
}

const initialState = {
  selectedDays: [],
  reserveLoading: false,
  reserveError: false,
  reservationsError: false,
};

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
        selectedDays: [],
      };
    }
    default: {
      return state;
    }
  }
}

export default reservationReducer;
