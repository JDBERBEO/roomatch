import axios from "axios";

export const RESERVATIONS_LOADING = "RESERVATIONS_LOADING ";
export const RESERVATIONS_SUCCESS = "RESERVATIONS_SUCCESS";
export const RESERVATIONS_ERROR = "RESERVATIONS_ERROR";
export const RESERVATIONS_FINISHED = "RESERVATIONS_FINISHED";

export function getReservations() {
  return async function (dispatch) {
    try {
      dispatch({ type: RESERVATIONS_LOADING });
      
      const token = localStorage.getItem('token')
      const { data } = await axios({
        method: "GET",
        baseURL: "http://localhost:8000",
        url: "reservations",
        headers:{
          'Authorization': `Bearer ${token}`
        }
      });

      dispatch({ type: RESERVATIONS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: RESERVATIONS_ERROR, payload: error });
    } finally {
      dispatch({ type: RESERVATIONS_FINISHED });
    }
  };
}

const initialState = {
  reservations: [],
  loading: false,
  error: false,
};

const getReservationsreducer = (state = initialState, action) => {
  switch (action.type) {
    case RESERVATIONS_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case RESERVATIONS_SUCCESS: {
      return {
        ...state,
        reservations: action.payload,
      };
    }
    case RESERVATIONS_ERROR: {
      return {
        ...state,
        error: true,
      };
    }
    case RESERVATIONS_FINISHED: {
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

export default getReservationsreducer;
