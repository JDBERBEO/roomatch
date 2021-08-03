import axios from "axios";

export const RESERVATION_LOADING = "RESERVATION_LOADING";
export const RESERVATION_SUCCESS = "RESERVATION_SUCCESS";
export const RESERVATION_ERROR = "RESERVATION_ERROR";
export const RESERVATION_FINISHED = "RESERVATION_FINISHED";

export function getReservation(id) {
  return async function (dispatch) {
    try {
      dispatch({ type: RESERVATION_LOADING });

      const { data } = await axios({
        method: "GET",
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: `/reservations/${id}`,
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
  reservation: [],
  loading: false,
  error: false,
};

const getOneReservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESERVATION_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case RESERVATION_SUCCESS: {
      return {
        ...state,
        ad: action.payload,
      };
    }
    case RESERVATION_ERROR: {
      return {
        ...state,
        error: true,
      };
    }
    case RESERVATION_FINISHED: {
      return {
        ...state,
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default getOneReservationReducer;