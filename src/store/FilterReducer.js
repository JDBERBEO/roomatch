import axios from "axios";
import { DateUtils } from "react-day-picker";

export const FILTER_LOADING = "FILTER_LOADING";
export const FILTER_SUCCESS = "FILTER_SUCCESS";
export const FILTER_ERROR = "FILTER_ERROR";
export const FILTER_FINISHED = "FILTER_FINISHED";
export const FILTER_CITY = "FILTER_CITY";
export const FILTER_CHANGES_SELECTED_DAYS = "FILTER_CHANGES_SELECTED_DAYS";

export function handleFilterCity(city) {
  return {
    type: FILTER_CITY,
    payload: city,
  };
}

export function handleDayClick(day, selectedDays, selected) {
  const selectedDaysOne = selectedDays.concat();
  if (selected) {
    const selectedIndex = selectedDaysOne.findIndex((selectedDay) =>
      DateUtils.isSameDay(selectedDay, day)
    );
    selectedDaysOne.splice(selectedIndex, 1);
  } else {
    selectedDaysOne.push(day);
  }
  return {
    type: FILTER_CHANGES_SELECTED_DAYS,
    payload: selectedDaysOne,
  };
}

export function filterPost(city, selectedDays, history) {
  console.log("city desde filter post", city);
  console.log("selectedDays desde filterpost", selectedDays);
  return async function (dispatch) {
    const selectedDaysString = JSON.stringify(selectedDays);

    try {
      dispatch({ type: FILTER_LOADING });
      const { data } = await axios({
        method: "GET",
        baseURL: "http://localhost:8000",
        url: `/advertisements/`,
        params: { selectedDays: selectedDaysString, city },
      });
      dispatch({ type: FILTER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FILTER_ERROR, payload: error });
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
  selectedDays: [],
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
        city: "",
        selectedDays: [],
      };
    }
    case FILTER_CHANGES_SELECTED_DAYS: {
      return {
        ...state,
        selectedDays: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}

export default filterPostReducer;
