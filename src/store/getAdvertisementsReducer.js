import axios from "axios";
import swal from "sweetalert";


export const ADVERTISEMENTS_LOADING = "ADVERTISEMENTS_LOADING ";
export const ADVERTISEMENTS_SUCCESS = "ADVERTISEMENTS_SUCCESS";
export const ADVERTISEMENTS_ERROR = "ADVERTISEMENTS_ERROR";
export const ADVERTISEMENTS_FINISHED = "ADVERTISEMENTS_FINISHED";
export const DELETE_ADVERTISEMENTS_LOADING = "DELETE_ADVERTISEMENTS_LOADING ";
export const DELETE_ADVERTISEMENTS_SUCCESS = "DELETE_ADVERTISEMENTS_SUCCESS";
export const DELETE_ADVERTISEMENTS_ERROR = "DELETE_ADVERTISEMENTS_ERROR";
export const DELETE_ADVERTISEMENTS_FINISHED = "DELETE_ADVERTISEMENTS_FINISHED";
export const HOSTPOST_LOADING = "HOSTPOST_LOADING ";
export const HOSTPOST_SUCCESS = "HOSTPOST_SUCCESS";
export const HOSTPOST_ERROR = "HOSTPOST_ERROR";
export const HOSTPOST_FINISHED = "HOSTPOST_FINISHED";
export const HOSTPOST_PUBLIC_SERVICES = "HOSTPOST_PUBLIC_SERVICES";
export const HOSTPOST_FACILITIES = "HOSTPOST_FACILITIES";
export const HOSTPOST_LIVING_SPACE = "HOSTPOST_LIVING_SPACE";
export const HOSTPOST_DESCRIPTION = "HOSTPOST_DESCRIPTION";
export const HOSTPOST_ROOMS = "HOSTPOST_ROOMS";
export const HOSTPOST_BATHROOM = "HOSTPOST_BATHROOM";
export const HOSTPOST_PRIVATE_BATHROOM = "HOSTPOST_PRIVATE_BATHROOM";
export const HOSTPOST_PARKING = "HOSTPOST_PARKING";
export const HOSTPOST_PHOTO = "HOSTPOST_PHOTO";
export const HOSTPOST_PRICE = "HOSTPOST_PRICE";
export const HOSTPOST_ACTIVITIES = "HOSTPOST_ACTIVITIES";
export const HOSTPOST_RANKING = "HOSTPOST_RANKING";
export const HOSTPOST_HOUSE_RULES = "HOSTPOST_HOUSE_RULES";
export const HOSTPOST_CITY = "HOSTPOST_CITY";

export function changePublicServices(public_services) {
  return {
    type: HOSTPOST_PUBLIC_SERVICES,
    payload: public_services,
  };
}
export function changeFacilities(facilities) {
  return {
    type: HOSTPOST_FACILITIES,
    payload: facilities,
  };
}
export function changeLivingSpace(living_space) {
  return {
    type: HOSTPOST_LIVING_SPACE,
    payload: living_space,
  };
}
export function changeDescription(description) {
  return {
    type: HOSTPOST_DESCRIPTION,
    payload: description,
  };
}
export function changeRooms(rooms) {
  return {
    type: HOSTPOST_ROOMS,
    payload: rooms,
  };
}
export function changeBathRoom(bathroom) {
  return {
    type: HOSTPOST_BATHROOM,
    payload: bathroom,
  };
}
export function changePrivateBathRoom(private_bathroom) {
  return {
    type: HOSTPOST_PRIVATE_BATHROOM,
    payload: private_bathroom,
  };
}
export function changeParking(parking) {
  return {
    type: HOSTPOST_PARKING,
    payload: parking,
  };
}
export function changePhoto(photo) {
  return {
    type: HOSTPOST_PHOTO,
    payload: photo,
  };
}
export function changePrice(price) {
  return {
    type: HOSTPOST_PRICE,
    payload: price,
  };
}
export function changeHouseRules(house_rules) {
  return {
    type: HOSTPOST_HOUSE_RULES,
    payload: house_rules,
  };
}

export function changeCity(city) {
  return {
    type: HOSTPOST_CITY,
    payload: city,
  };
}

export function hostPostAdv(datas, history) {
  return async function (dispatch) {
    try {
      dispatch({ type: HOSTPOST_LOADING });
      const token = localStorage.getItem("tokenHost");
      const { data } = await axios({
        method: "POST",
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: "/advertisements/",
        data: datas,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({ type: HOSTPOST_SUCCESS, payload: data });
      if (data) {
        swal("Your space has been created","","success");
      }
      history.push("/host/profile");
    } catch (error) {
      dispatch({ type: HOSTPOST_ERROR, payload: error });
    } finally {
      dispatch({ type: HOSTPOST_FINISHED });
    }
  };
}

export function getAdvertisements() {
  return async function (dispatch) {
    try {
      dispatch({ type: ADVERTISEMENTS_LOADING });

      const token = localStorage.getItem("tokenHost");
      const { data } = await axios({
        method: "GET",
        baseURL: process.env.REACT_APP_SERVER_URL,
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

export function deleteAdvertisement(adverId) {
  return async function (dispatch) {
    try {
      const token = localStorage.getItem("tokenHost");
      await axios({
        method: "DELETE",
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: `/advertisements/${adverId}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({ type: DELETE_ADVERTISEMENTS_SUCCESS, payload: adverId });
    } catch (error) {
      dispatch({ type: DELETE_ADVERTISEMENTS_ERROR, payload: error });
    } finally {
      dispatch({ type: DELETE_ADVERTISEMENTS_FINISHED });
    }
  };
}

const initialState = {
  hostAdvertisements: [],
  loading: false,
  error: false,
  public_services: "",
  facilities: "",
  living_space: "",
  description: "",
  rooms: 0,
  bathroom: 0,
  private_bathroom: false,
  parking: 0,
  photo: "",
  price: 0,
  house_rules: "",
  city: "",
  hostPostLoading: false,
  hostPostError: false,
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
    case DELETE_ADVERTISEMENTS_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case DELETE_ADVERTISEMENTS_SUCCESS: {
      return {
        ...state,
        hostAdvertisements: state.hostAdvertisements.filter((adver) => {
          return adver._id !== action.payload;
        }),
      };
    }
    case DELETE_ADVERTISEMENTS_ERROR: {
      return {
        ...state,
        error: true,
      };
    }
    case DELETE_ADVERTISEMENTS_FINISHED: {
      return {
        ...state,
        loading: false,
      };
    }
    case HOSTPOST_PUBLIC_SERVICES: {
      return {
        ...state,
        public_services: action.payload,
      };
    }
    case HOSTPOST_FACILITIES: {
      return {
        ...state,
        facilities: action.payload,
      };
    }
    case HOSTPOST_LIVING_SPACE: {
      return {
        ...state,
        living_space: action.payload,
      };
    }
    case HOSTPOST_DESCRIPTION: {
      return {
        ...state,
        description: action.payload,
      };
    }
    case HOSTPOST_ROOMS: {
      return {
        ...state,
        rooms: action.payload,
      };
    }
    case HOSTPOST_BATHROOM: {
      return {
        ...state,
        bathroom: action.payload,
      };
    }
    case HOSTPOST_PRIVATE_BATHROOM: {
      return {
        ...state,
        private_bathroom: action.payload,
      };
    }
    case HOSTPOST_PARKING: {
      return {
        ...state,
        parking: action.payload,
      };
    }
    case HOSTPOST_PHOTO: {
      return {
        ...state,
        photo: action.payload,
      };
    }
    case HOSTPOST_PRICE: {
      return {
        ...state,
        price: action.payload,
      };
    }
    case HOSTPOST_HOUSE_RULES: {
      return {
        ...state,
        house_rules: action.payload,
      };
    }
    case HOSTPOST_CITY: {
      return {
        ...state,
        city: action.payload,
      };
    }
    case HOSTPOST_SUCCESS: {
      return {
        ...state,
        hostAdvertisements: state.hostAdvertisements.concat(action.payload),
        hostPostLoading: false,
        public_services: "",
        facilities: "",
        living_space: "",
        description: "",
        rooms: 0,
        bathroom: 0,
        private_bathroom: false,
        parking: 0,
        photo: "",
        price: 0,
        house_rules: "",
        city: "",
      };
    }

    case HOSTPOST_ERROR: {
      return {
        ...state,
        hostPostError: true,
      };
    }
    case HOSTPOST_FINISHED: {
      return {
        ...state,
        hostPostLoading: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default getAdvertisementsReducer;
