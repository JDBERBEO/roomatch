import axios from "axios";
export const FILTER_LOADING = "FILTER_LOADING";
export const FILTER_SUCCESS = "FILTER_SUCCESS";
export const FILTER_ERROR = "FILTER_ERROR";
export const FILTER_FINISHED = "FILTER_FINISHED";
export const FILTER_CITY = "FILTER_CITY";

export function handleFilterCity(city) {
  return {
    type: FILTER_CITY,
    payload: city,
  };
}

export function filterPost(city, history) {
  console.log("filterPostcity", city);
  return async function (dispatch) {
    try {
      dispatch({ type: FILTER_LOADING });
      const { data } = await axios({
        method: "GET",
        baseURL: "http://localhost:8000",
        url: `/advertisements/${city}`,
      });
      dispatch({ type: FILTER_SUCCESS, payload: data });
      history.push("/advertisements");
    } catch (error) {
      dispatch({ type: FILTER_ERROR, payload: error });
      console.dir(error);
    } finally {
      dispatch({ type: FILTER_FINISHED });
    }
  };
}

const initialState = {
  city: "",
  filterLoading: false,
  filterError: false,
  ads: [],
};

function filterPostReducer(state = initialState, action) {
  switch (action.type) {
    case FILTER_CITY: {
      return {
        ...state,
        city: action.payload,
      };
    }
    case FILTER_SUCCESS: {
      return {
        ...state,
        filterLoading: false,
        ads: action.payload,
      };
    }

    case FILTER_ERROR: {
      return {
        ...state,
        filterError: true,
      };
    }
    case FILTER_FINISHED: {
      return {
        ...state,
        filterLoading: false,
      };
    }
    default: {
      return state;
    }
  }
}

export default filterPostReducer;
