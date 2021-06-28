import { createStore, combineReducers } from "redux";
import CounterReducer from "./CounterReducer";

const rootReducer = combineReducers({
  CounterReducer,
});

const store = createStore(rootReducer);

export default store;
