import axios from "axios";

export const REGISTER_LOADING = "REGISTER_LOADING_HOST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS_HOST";
export const REGISTER_ERROR = "REGISTER_ERROR_HOST";
export const REGISTER_FINISHED = "REGISTER_FINISHED_HOST";
export const CHANGE_LIVING_SPACE = "CHANGE_LIVING_SPACE";
export const CHANGE_DESCRIPTION = "CHANGE_DESCRIPTION";
export const CHANGE_ROOMS = "CHANGE_ROOMS";
export const CHANGE_BATHROOMS = "CHANGE_BATHROOMS";
export const CHANGE_PARKING = "CHANGE_PARKING";
export const CHANGE_PRICE = "CHANGE_PRICE";

export function changeLivingSpace(living_space) {
  return {
    type: CHANGE_LIVING_SPACE,
    payload: living_space,
  };
}

export function changeDescription(description) {
  return {
    type: CHANGE_DESCRIPTION,
    payload: description,
  };
}

export function changeRooms(rooms) {
  return {
    type: CHANGE_ROOMS,
    payload: rooms,
  };
}
export function changeBathrooms(bathrooms) {
  return {
    type: CHANGE_BATHROOMS,
    payload: bathrooms,
  };
}

export function changeParking(parking) {
  return {
    type: CHANGE_PARKING,
    payload: parking,
  };
}

export function changePrice(price) {
  return {
    type: CHANGE_PRICE,
    payload: price,
  };
}

export function register(
  living_space,
  description,
  rooms,
  bathrooms,
  parking,
  price,
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
      localStorage.setItem('token', data.token)
      dispatch({ type: REGISTER_SUCCESS, payload: data });
      history.push("/host/profile");
    } catch (error) {
      dispatch({ type: REGISTER_ERROR, payload: error });
    } finally {
      dispatch({ type: REGISTER_FINISHED });
    }
  };
}