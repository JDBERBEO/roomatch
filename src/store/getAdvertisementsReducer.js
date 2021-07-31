import axios from "axios";

export const ADVERTISEMENTS_LOADING = "ADVERTISEMENTS_LOADING ";
export const ADVERTISEMENTS_SUCCESS = "ADVERTISEMENTS_SUCCESS";
export const ADVERTISEMENTS_ERROR = "ADVERTISEMENTS_ERROR";
export const ADVERTISEMENTS_FINISHED = "ADVERTISEMENTS_FINISHED";
export const DELETE_ADVERTISEMENTS_LOADING = "DELETE_ADVERTISEMENTS_LOADING ";
export const DELETE_ADVERTISEMENTS_SUCCESS = "DELETE_ADVERTISEMENTS_SUCCESS";
export const DELETE_ADVERTISEMENTS_ERROR = "DELETE_ADVERTISEMENTS_ERROR";
export const DELETE_ADVERTISEMENTS_FINISHED = "DELETE_ADVERTISEMENTS_FINISHED";

export function getAdvertisements() {
  return async function (dispatch) {
    try {
      dispatch({ type: ADVERTISEMENTS_LOADING });

      const token = localStorage.getItem("token");
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

export function deleteAdvertisement(adverId){
  return async function(dispatch){
    try{
      const token = localStorage.getItem("token");
      await axios ({
        method:"DELETE",
        baseURL:"http://localhost:8000",
        url:`/advertisements/${adverId}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      dispatch({type: DELETE_ADVERTISEMENTS_SUCCESS, payload: adverId})
    }catch(error){
      dispatch({type: DELETE_ADVERTISEMENTS_ERROR, payload: error})
    }finally{
      dispatch({type: DELETE_ADVERTISEMENTS_FINISHED})
    }
}
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
    case DELETE_ADVERTISEMENTS_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case DELETE_ADVERTISEMENTS_SUCCESS: {
      return {
        ...state,
        hostAdvertisements: state.hostAdvertisements.filter((adver)=>{
          return adver._id!==action.payload
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
      }
    }
    default: {
      return state;
    }
  }
};

export default getAdvertisementsReducer;
