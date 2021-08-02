import axios from "axios";

export const AD_LOADING = "AD_LOADING";
export const AD_SUCCESS = "AD_SUCCESS";
export const AD_ERROR = "AD_ERROR";
export const AD_FINISHED = "AD_FINISHED";

export function getAd(id) {
  return async function (dispatch) {
    try {
      dispatch({ type: AD_LOADING });
      const { data } = await axios({
        method: "GET",
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: `/advertisements/seeAd/${id}`,
      });
      dispatch({ type: AD_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: AD_ERROR, payload: error });
    } finally {
      dispatch({ type: AD_FINISHED });
    }
  };
}

const initialState = {
  ad: [],
  loading: false,
  error: false,
};

const getOneAdReducer = (state = initialState, action) => {
  switch (action.type) {
    case AD_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case AD_SUCCESS: {
      return {
        ...state,
        ad: action.payload,
      };
    }
    case AD_ERROR: {
      return {
        ...state,
        error: true,
      };
    }
    case AD_FINISHED: {
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

export default getOneAdReducer;
