import axios from "axios";

export const PROFILE_LOADING = "PROFILE_LOADING ";
export const PROFILE_SUCCESS = "PROFILE_SUCCESS";
export const PROFILE_ERROR = "PROFILE_ERROR";
export const PROFILE_FINISHED = "PROFILE_FINISHED";

export function getProfile() {
  return async function (dispatch) {
    try {
      dispatch({ type: PROFILE_LOADING });

      const token = localStorage.getItem("token");
      const { data } = await axios({
        method: "GET",
        baseURL: "http://localhost:8000",
        url: "/roomie/profile",
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

export function updateProfile(profile) {
  return async function (dispatch) {
    try {
      // dispatch({ type: PROFILE_LOADING })
      const token = localStorage.getItem("token");
      const { data } = await axios({
        method: "PUT",
        baseURL: "http://localhost:8000",
        url: "/roomie/profile/",
        data: profile,
        headers: {
          Authorization: `Bearer ${token}`,
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

export function updateProfilePhoto(file) {
  return async function (dispatch) {
    try {
      // dispatch({ type: PROFILE_LOADING })

      const data = new FormData();
      if (file) {
        data.append("profilePhoto", file, file.name);
      }
      const token = localStorage.getItem("token");
      const response = await axios({
        method: "PUT",
        baseURL: "http://localhost:8000",
        url: "/roomie/updatePhoto",
        data,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      dispatch({ type: PROFILE_SUCCESS, payload: response.data });
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

const ProfileReducer = (state = initialState, action) => {
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

export default ProfileReducer;
