import { createAction } from "../utils";

export const PLUS = "PLUS";
export const MINUS = "MINUS";
export const FETCH = "FETCH";
export const FETCH_COMPLETE = "FETCH_COMPLETE";
export const FETCH_FAIL = "FETCH_FAIL";

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
        count: state.count > 0 ? state.count - 1 : 0
      };
    case FETCH_COMPLETE:
      const { list } = action.payload;

      return {
        ...state,
        list
      };
    default:
      return state;
  }
}
