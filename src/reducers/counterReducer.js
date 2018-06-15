import { createAction } from "../utils";

const PLUS = "PLUS";
const MINUS = "MINUS";
const FETCH = "FETCH";
const FETCH_COMPLETE = "FETCH_COMPLETE";
const FETCH_FAIL = "FETCH_FAIL";

export const [
  plusAction,
  minusAction,
  fetchAction,
  fetchCompleteAction,
  fetchFailAction
] = [PLUS, MINUS, FETCH, FETCH_COMPLETE, FETCH_FAIL].map(createAction);

const INIT_STATE = {
  count: 0,
  list: []
};

export default function counterReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case PLUS:
      return {
        ...state,
        count: state.count + 1
      };
    case MINUS:
      return {
        ...state,
        count: state.count - 1
      };
    case FETCH_COMPLETE:
      const { list } = action.payload;
      const { count } = state;

      return {
        ...state,
        list: list.slice(0, count)
      };
    default:
      return state;
  }
}
