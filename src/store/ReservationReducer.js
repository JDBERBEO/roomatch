import axios from "axios";
import { DateUtils } from "react-day-picker";
export const RESERVATION_LOADING = "RESERVATION_LOADING ";
export const RESERVATION_SUCCESS = "RESERVATION_SUCCESS";
export const RESERVATION_ERROR = "RESERVATION_ERROR";
export const RESERVATION_FINISHED = "RESERVATION_FINISHED";
export const CHANGE_RANGEDATE = "CHANGE_RANGEDATE";
export const CHANGE_ENDDATE = "CHANGE_ENDDATE";

export function handleDayClick(day, range) {
  // console.log("day from handlereducer: ", day);
  // const state = getInitialState();
  // const { range } = state;
  // console.log("state from handlereducer: ", state);
  const newRange = DateUtils.addDayToRange(day, {
    from: undefined,
    to: undefined,
  });
  console.log("newrangeTO from handlereducer: ", newRange);
  return {
    type: CHANGE_RANGEDATE,
    payload: newRange,
  };
}

export function reserve(
  AdvertisementId,
  startDate,
  roomie,
  endDate,
  range,
  paidReservation
) {
  return async function (dispatch) {
    console.log("range desde reducer: ", range);
    try {
      dispatch({ type: RESERVATION_LOADING });
      const { data } = await axios({
        method: "POST",
        baseURL: "http://localhost:8000",
        url: "/reservations",
        data: {
          AdvertisementId,
          startDate,
          roomie,
          endDate,
          range,
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

const initialState = {
  range: {
    from: undefined,
    to: undefined,
  },
  reserveLoading: false,
  reserveError: false,
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
    default: {
      return state;
    }
  }
}

export default reservationReducer;
