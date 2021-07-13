import axios from "axios";

export const REGISTER_LOADING = "REGISTER_LOADING_HOST_SIGN_IN";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS_HOST_SIGN_IN";
export const REGISTER_ERROR = "REGISTER_ERROR_HOST_SIGN_IN";
export const REGISTER_FINISHED = "REGISTER_FINISHED_HOST_SIGN_IN";
export const CHANGE_EMAIL = "CHANGE_EMAIL_HOST_SIGN_IN";
export const CHANGE_PASSWORD = "CHANGE_PASSWORD_HOST_SIGN_IN";
export const HANDLE_CHANGE_HOST = "HANDLE_CHANGE_HOST_SIGN_IN";
export const HANDLE_CHANGE_ROOMIE = "HANDLE_CHANGE_ROOMIE_SIGN_IN";
export const HANDLE_CHANGE_SHOW = "HANDLE_CHANGE_SHOW_SIGN_IN";
export const HANDLE_CHANGE_CLOSE = "HANDLE_CHANGE_CLOSE_SIGN_IN";

export function changeEmail(email) {
  return {
    type: CHANGE_EMAIL,
    payload: email,
  };
}
export function changePassword(password) {
  return {
    type: CHANGE_PASSWORD,
    payload: password,
  };
}

export function changeHandleHost() {
  return {
    type: HANDLE_CHANGE_HOST,
  };
}

export function changeHandleRoomie() {
  return {
    type: HANDLE_CHANGE_ROOMIE,
  };
}
export function changeShow() {
  return function (dispatch) {
    dispatch({ type: HANDLE_CHANGE_SHOW });
  };
}
export function changeClose() {
  return {
    type: HANDLE_CHANGE_CLOSE,
  };
}

export function loginHost(
  email,
  password,
  show,
  switch_rol,
  disabledRoomie,
  disabledHost,
  history
) {
  return async function (dispatch) {
    try {
      dispatch({ type: REGISTER_LOADING });
      const { data } = await axios({
        method: "POST",
        baseURL: "http://localhost:8000",
        url: "/host/signin",
        data: {
          email,
          password,
          show,
          switch_rol,
          disabledRoomie,
          disabledHost,
        },
      });
      localStorage.setItem("token", data.token);
      dispatch({ type: REGISTER_SUCCESS, payload: data });
      history.push("/host/profile");
    } catch (error) {
      dispatch({ type: REGISTER_ERROR, payload: error });
    } finally {
      dispatch({ type: REGISTER_FINISHED });
    }
  };
}

export function loginRoomie(
  email,
  password,
  show,
  switch_rol,
  disabledRoomie,
  disabledHost,
  history
) {
  return async function (dispatch) {
    try {
      dispatch({ type: REGISTER_LOADING });
      const { data } = await axios({
        method: "POST",
        baseURL: "http://localhost:8000",
        url: "/roomie/signin",
        data: {
          email,
          password,
          show,
          switch_rol,
          disabledRoomie,
          disabledHost,
        },
      });
      localStorage.setItem("token", data.token);
      dispatch({ type: REGISTER_SUCCESS, payload: data });
      history.push("/roomie/profile");
    } catch (error) {
      dispatch({ type: REGISTER_ERROR, payload: error });
    } finally {
      dispatch({ type: REGISTER_FINISHED });
    }
  };
}

const initialState = {
  email: "",
  password: "",
  show: false,
  switch_rol: false,
  disabledRoomie: false,
  disabledHost: false,
  loading: false,
  error: false,
  isAuth: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_EMAIL: {
      return {
        ...state,
        email: action.payload,
      };
    }
    case CHANGE_PASSWORD: {
      return {
        ...state,
        password: action.payload,
      };
    }
    case HANDLE_CHANGE_HOST: {
      return {
        ...state,
        switch_rol: false,
        disabledRoomie: false,
        disabledHost: true,
      };
    }
    case HANDLE_CHANGE_ROOMIE: {
      return {
        ...state,
        switch_rol: true,
        disabledRoomie: true,
        disabledHost: false,
      };
    }

    case HANDLE_CHANGE_SHOW: {
      return {
        ...state,
        show: true,
      };
    }

    case HANDLE_CHANGE_CLOSE: {
      return {
        ...state,
        show: false,
      };
    }
    case REGISTER_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case REGISTER_SUCCESS: {
      return {
        ...state,
        loading: action.payload,
        show:false,
      };
    }
    case REGISTER_ERROR: {
      return {
        ...state,
        error: false,
      };
    }
    case REGISTER_FINISHED: {
      return {
        ...state,
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
}

export default reducer;
