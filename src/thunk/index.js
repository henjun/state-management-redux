import {
  fetchCompleteAction,
  fetchFailAction
} from "../reducers/counterReducer";
import { api } from "../api";

export function fetch() {
  return async dispatch => {
    try {
      const repos = await api();

      dispatch(fetchCompleteAction({ list: repos }));
    } catch (e) {
      dispatch(fetchFailAction({ error: e }));
    }
  };
}
