import { from, of } from "rxjs";
import { switchMap, map, catchError } from "rxjs/operators";
// import {ajax} from "rxjs/ajax";

import {
  FETCH,
  // PLUS,
  // MINUS,
  // FETCH_FAIL,
  // FETCH_COMPLETE,
  fetchCompleteAction,
  fetchFailAction
} from "../reducers/counterReducer";
import { api } from "../api";

const rootEpic = action$ =>
  action$.ofType(FETCH).pipe(
    switchMap(({ count }) =>
      from(api()).pipe(
        map(repo => fetchCompleteAction({ list: repo.slice(0, count) })),
        catchError(e => of(fetchFailAction({ error: e })))
      )
    )
  );

export default rootEpic;
