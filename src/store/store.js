import { createStore, combineReducers, applyMiddleware } from "redux";
import getAdsReducer from "./getAdsReducer";
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
  getAdsReducer,
});

const middlewares = applyMiddleware(thunk, logger);

const store = createStore(rootReducer, middlewares);

export default store;