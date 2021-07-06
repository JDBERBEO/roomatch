import axios from "axios";

export const RESERVATION_LOADING = "RESERVATION_LOADING ";
export const RESERVATION_SUCCESS = "RESERVATION_SUCCESS";
export const RESERVATION_ERROR = "RESERVATION_ERROR";
export const RESERVATION_FINISHED = "RESERVATION_FINISHED";
export const CHANGE_STARTDATE = "CHANGE_STARTDATE";
export const CHANGE_ENDDATE = "CHANGE_ENDDATE";

export function changeStartDate(startDate) {
  return {
    type: CHANGE_STARTDATE,
    payload: startDate,
  };
}

export function changeEndDate(endDate) {
  return {
    type: CHANGE_ENDDATE,
    payload: endDate,
  };
}

export function reserve(
  AdvertisementId,
  startDate,
  roomie,
  endDate,
  paidReservation
  //   history
) {
  console.log(
    "roomie desde reserve: ",
    roomie,
    "advertisement id desde reserve: ",
    AdvertisementId,
    "startDate desde reserve: ",
    startDate,
    "endDate desde reserve: ",
    endDate,
    "paidReservation desde reserve: ",
    paidReservation
  );

  return async function (dispatch) {
    try {
      dispatch({ type: RESERVATION_LOADING });
      const { data } = await axios({
        method: "POST",
        baseURL: "http://localhost:8000",
        url: "/reservations",
        data: {
          AdvertisementId,
          startDate,
          roomie,
          endDate,
          paidReservation,
        },
      });
      console.log("estoes data", data);

      dispatch({ type: RESERVATION_SUCCESS, payload: data });
      //   history.push("/advertisements");
    } catch (error) {
      dispatch({ type: RESERVATION_ERROR, payload: error });
    } finally {
      dispatch({ type: RESERVATION_FINISHED });
    }
  };
}

const initialState = {
  startDate: "",
  endDate: "",
  loading: false,
  error: false,
};

function reservationReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_STARTDATE: {
      return {
        ...state,
        startDate: action.payload,
      };
    }
    case CHANGE_ENDDATE: {
      return {
        ...state,
        endDate: action.payload,
      };
    }
    case RESERVATION_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case RESERVATION_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case RESERVATION_ERROR: {
      return {
        ...state,
        error: true,
      };
    }
    case RESERVATION_FINISHED: {
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

export default reservationReducer;
