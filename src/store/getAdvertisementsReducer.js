import axios from "axios";

export const ADVERTISEMENTS_LOADING = "ADVERTISEMENTS_LOADING ";
export const ADVERTISEMENTS_SUCCESS = "ADVERTISEMENTS_SUCCESS";
export const ADVERTISEMENTS_ERROR = "ADVERTISEMENTS_ERROR";
export const ADVERTISEMENTS_FINISHED = "ADVERTISEMENTS_FINISHED";

export function getAdvertisements() {
  return async function (dispatch) {
    try {
      dispatch({ type: ADVERTISEMENTS_LOADING });

      const token = localStorage.getItem("Token");
      const { data } = await axios({
        method: "GET",
        baseURL: "http://localhost:8000",
        url: `/advertisements/hostAd/`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch({ type: ADVERTISEMENTS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: ADVERTISEMENTS_ERROR, payload: error });
    } finally {
      dispatch({ type: ADVERTISEMENTS_FINISHED });
    }
  };
}

const initialState = {
  hostAdvertisements: [],
  loading: false,
  error: false,
};

const getAdvertisementsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADVERTISEMENTS_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case ADVERTISEMENTS_SUCCESS: {
      return {
        ...state,
        hostAdvertisements: action.payload,
      };
    }
    case ADVERTISEMENTS_ERROR: {
      return {
        ...state,
        error: true,
      };
    }
    case ADVERTISEMENTS_FINISHED: {
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

export default getAdvertisementsReducer;
