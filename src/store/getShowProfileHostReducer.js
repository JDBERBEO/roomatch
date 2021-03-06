import axios from "axios";

export const PROFILE_LOADING = "PROFILE_LOADING ";
export const PROFILE_SUCCESS = "PROFILE_SUCCESS";
export const PROFILE_ERROR = "PROFILE_ERROR";
export const PROFILE_FINISHED = "PROFILE_FINISHED";

export function getProfileHost() {
  return async function (dispatch) {
    try {
      dispatch({ type: PROFILE_LOADING });

      const token = localStorage.getItem("tokenHost");
      const { data } = await axios({
        method: "GET",
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: "/host/profile",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch({ type: PROFILE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: PROFILE_ERROR, payload: error });
    } finally {
      dispatch({ type: PROFILE_FINISHED });
    }
  };
}

export function updateProfileHost(dataForm) {
  return async function (dispatch) {
    try {
      // dispatch({ type: PROFILE_LOADING })
      const token = localStorage.getItem("tokenHost");
      const { data } = await axios({
        method: "PUT",
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: "/host/profile/",
        data: dataForm,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      dispatch({ type: PROFILE_SUCCESS, payload: data });
    } catch (error) {
      //        dispatch({ type: PROFILE_ERROR, payload: error.response.data.message })
    } finally {
      //       dispatch({ type: PROFILE_FINISHED })
    }
  };
}

const initialState = {
  profile: {},
  loading: false,
  error: false,
};

const getProfileHostReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case PROFILE_SUCCESS: {
      return {
        ...state,
        profile: action.payload,
      };
    }
    case PROFILE_ERROR: {
      return {
        ...state,
        error: true,
      };
    }
    case PROFILE_FINISHED: {
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

export default getProfileHostReducer;
