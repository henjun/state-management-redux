import { put, call, take } from "redux-saga/effects";
import {
  FETCH,
  PLUS,
  MINUS,
  FETCH_FAIL,
  FETCH_COMPLETE
} from "../reducers/counterReducer";
import { api } from "../api";

export default function* rootSaga() {
  while (true) {
    const { count } = yield take(FETCH);

    try {
      const repo = yield call(api);
      yield put({
        type: FETCH_COMPLETE,
        payload: { list: repo.slice(0, count) }
      });
    } catch (e) {
      yield put({ type: FETCH_FAIL, payload: { error: e } });
    }
  }
}
