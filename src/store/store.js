import { createStore, combineReducers, applyMiddleware } from "redux";
import getAdsReducer from "./getAdsReducer";
import getReservationsReducer from "./getReservationsReducer";
import getAdvertisementsReducer from "./getAdvertisementsReducer";
import reservationReducer from "./ReservationReducer";
import getOneAdReducer from "./getOneAdsReducer";
import getOneReservationReducer from "./getOneReservationReducer";
import formHostReducer from "./formHostReducer";
import hostSignInReducer from "./hostSignInReducer";
import roomieReducer from "./roomieReducer";
import getProfileReducer from "./getShowProfileReducer";
import getAdvertisementsReducer from "./getAdvertisementsReducer";
import hostPostReducer from "./hostPostReducer";
import getProfileHostReducer from "./getShowProfileHostReducer";
import thunk from "redux-thunk";

function logger(store) {
  return function (next) {
    return function (action) {
      const prevState = store.getState();
      const result = next(action);
      const nextState = store.getState();

      console.log({
        "Prev state": prevState,
        action,
        "Next state": nextState,
      });

      return result;
    };
  };
}

const rootReducer = combineReducers({
  roomieReducer,
  reservationReducer,
  getOneReservationReducer,
  getReservationsReducer,
  getProfileReducer,
  getAdvertisementsReducer,
  getAdsReducer,
  getOneAdReducer,
  formHostReducer,
  hostSignInReducer,
  hostPostReducer,
  getProfileHostReducer,
});

const middlewares = applyMiddleware(thunk, logger);

const store = createStore(rootReducer, middlewares);

export default store;
