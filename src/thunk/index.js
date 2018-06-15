import {
  fetchCompleteAction,
  plusAction,
  PLUS,
  FETCH_COMPLETE,
  MINUS,
  FETCH
} from "../reducers/counterReducer";
import { api } from "../api";

export function plus() {
  return async dispatch => {
    dispatch({ type: PLUS });
    const repos = await api();

    dispatch({
      type: FETCH_COMPLETE,
      payload: {
        list: repos
      }
    });
  };
}

export function minus() {
  return async dispatch => {
    dispatch({ type: MINUS });
    const repos = await api();

    dispatch({
      type: FETCH_COMPLETE,
      payload: {
        list: repos
      }
    });
  };
}

export function fetch() {
  return async dispatch => {
    const repos = await api();

    dispatch({
      type: FETCH_COMPLETE,
      payload: {
        list: repos
      }
    });
  };
}
