const { combineReducers } = window.Redux;
import counterReducer from "./counterReducer.js";

const createReducer = () =>
  combineReducers({
    counter: counterReducer
  });

export default createReducer;
