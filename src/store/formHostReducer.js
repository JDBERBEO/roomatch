import axios from "axios";

export const REGISTER_LOADING = "REGISTER_LOADING_HOST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS_HOST";
export const REGISTER_ERROR = "REGISTER_ERROR_HOST";
export const REGISTER_FINISHED = "REGISTER_FINISHED_HOST";
export const CHANGE_NAME = "CHANGE_NAME_HOST";
export const CHANGE_LAST_NAME = "CHANGE_LAST_NAME_HOST";
export const CHANGE_EMAIL = "CHANGE_EMAIL_HOST";
export const CHANGE_PASSWORD = "CHANGE_PASSWORD_HOST";
export const CHANGE_AGE = "CHANGE_AGE_HOST";
export const CHANGE_PERSONAL_DESCRIPTION = "CHANGE_PERSONAL_DESCRIPTION_HOST";
export const CHANGE_PROFILE_PHOTO = "CHANGE_PROFILE_PHOTO_HOST";

export function changeName(name) {
  return {
    type: CHANGE_NAME,
    payload: name,
  };
}

export function changeLastName(lastName) {
  return {
    type: CHANGE_LAST_NAME,
    payload: lastName,
  };
}
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

export function changeAge(age) {
  return {
    type: CHANGE_AGE,
    payload: age,
  };
}

export function changePersonalDescription(description) {
  return {
    type: CHANGE_PERSONAL_DESCRIPTION,
    payload: description,
  };
}

export function changeProfilePhoto(profilePhoto) {
  return {
    type: CHANGE_PROFILE_PHOTO,
    payload: profilePhoto,
  };
}

export function register(
  name,
  lastName,
  email,
  password,
  age,
  description,
  profilePhoto,
  history
) {
  return async function (dispatch) {
    try {
      dispatch({ type: REGISTER_LOADING });
      const { data } = await axios({
        method: "POST",
        baseURL: "http://localhost:8000",
        url: "/host/signup",
        data: {
          name,
          lastName,
          email,
          password,
          age,
          description,
          profilePhoto,
        },
      });
      console.log(data);

      dispatch({ type: REGISTER_SUCCESS, payload: data });
      history.push("/host/profile");
    } catch (error) {
      dispatch({ type: REGISTER_ERROR, payload: error });
    } finally {
      dispatch({ type: REGISTER_FINISHED });
    }
  };
}

const initialState = {
  name: "",
  lastName: "",
  email: "",
  password: "",
  age: 0,
  description: "",
  profilePhoto: "",
  loading: false,
  error: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_NAME: {
      return {
        ...state,
        name: action.payload,
      };
    }
    case CHANGE_LAST_NAME: {
      return {
        ...state,
        lastName: action.payload,
      };
    }
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
    case CHANGE_AGE: {
      return {
        ...state,
        age: action.payload,
      };
    }
    case CHANGE_PERSONAL_DESCRIPTION: {
      return {
        ...state,
        description: action.payload,
      };
    }
    case CHANGE_PROFILE_PHOTO: {
      return {
        ...state,
        profilePhoto: action.payload,
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
