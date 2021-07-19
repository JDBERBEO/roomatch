import { createStore, combineReducers, applyMiddleware } from "redux";
import getAdsReducer from "./getAdsReducer";
import reservationReducer from "./ReservationReducer";
import getOneAdReducer from "./getOneAdsReducer";
import formHostReducer from "./formHostReducer";
import hostSignInReducer from "./hostSignInReducer";
import roomieReducer from "./roomieReducer";
import getAdvertisementsReducer from "./getAdvertisementsReducer";
import hostPostReducer from "./hostPostReducer";
import filterPostReducer from "./FilterReducer";

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
  getAdsReducer,
  reservationReducer,
  getAdvertisementsReducer,
  getOneAdReducer,
  formHostReducer,
  hostSignInReducer,
  hostPostReducer,
  filterPostReducer,
});

const middlewares = applyMiddleware(thunk, logger);

const store = createStore(rootReducer, middlewares);

export default store;
