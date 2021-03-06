import axios from "axios";

export const ADS_LOADING = "ADS_LOADING";
export const ADS_SUCCESS = "ADS_SUCCESS";
export const ADS_ERROR = "ADS_ERROR";
export const ADS_FINISHED = "ADS_FINISHED";

export function getAds() {
  return async function (dispatch) {
    try {
      dispatch({ type: ADS_LOADING });

      const { data } = await axios({
        method: "GET",
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: "/advertisements/getAds",
      });
      dispatch({ type: ADS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: ADS_ERROR, payload: error });
    } finally {
      dispatch({ type: ADS_FINISHED });
    }
  };
}

const initialState = {
  ads: [],
  loading: false,
  error: false,
};

const getAllAdsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADS_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case ADS_SUCCESS: {
      return {
        ...state,
        ads: action.payload,
      };
    }
    case ADS_ERROR: {
      return {
        ...state,
        error: true,
      };
    }
    case ADS_FINISHED: {
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

export default getAllAdsReducer;
