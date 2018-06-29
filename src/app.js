import { fetch } from "./thunk";
import { minusAction, plusAction } from "./reducers/counterReducer";
import { FETCH } from "./reducers/counterReducer";
export default class App {
  constructor({ dispatch, store }) {
    this.dispatch = dispatch;

    document.getElementById("plus").addEventListener("click", () => {
      dispatch(plusAction());
      dispatch({ type: FETCH, count: store.getState().counter.count });
    });

    document.getElementById("minus").addEventListener("click", () => {
      dispatch(minusAction());
      dispatch({ type: FETCH, count: store.getState().counter.count });
    });

    dispatch({ type: FETCH, count: 5 });
  }

  render(state) {
    const { count, list } = state;

    document.getElementById("counter").innerText = count;
    document.getElementById("repos").innerHTML = list
      .map(item => `<li><a href="${item.html_url}">${item.full_name}</a></li>`)
      .join("");
  }
}
