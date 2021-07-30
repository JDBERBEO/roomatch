import axios from "axios";
import swal from 'sweetalert'

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
export function hostPostAdv(
  public_services,
  facilities,
  living_space,
  description,
  rooms,
  bathroom,
  private_bathroom,
  parking,
  photo,
  price,
  house_rules,
  city,
  history
) {
  return async function (dispatch) {
    try {
      dispatch({ type: HOSTPOST_LOADING });
      const token = localStorage.getItem("token");
      const { data } = await axios({
        method: "POST",
        baseURL: "http://localhost:8000",
        url: `/advertisements/`,
        data: {
          public_services,
          facilities,
          living_space,
          description,
          rooms,
          bathroom,
          private_bathroom,
          parking,
          photo,
          price,
          house_rules,
          city,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({ type: HOSTPOST_SUCCESS, payload: data });
      if(data){
        swal("Your space has been created")
      }
      history.push("/host/profile");

    } catch (error) {
      dispatch({ type: HOSTPOST_ERROR, payload: error });
    } finally {
      dispatch({ type: HOSTPOST_FINISHED });
    }
  };
}

const initialState = {
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

function hostPostReducer(state = initialState, action) {
  switch (action.type) {
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
        city:"",
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
}

export default hostPostReducer;
