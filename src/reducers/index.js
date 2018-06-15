import { combineReducers } from "redux";
import counterReducer from "./counterReducer";

const createReducer = () =>
  combineReducers({
    counter: counterReducer
  });

export default createReducer;
