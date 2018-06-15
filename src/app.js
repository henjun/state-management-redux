import { fetch } from "./thunk";
import { minusAction, plusAction } from "./reducers/counterReducer";

export default class App {
  constructor({ dispatch }) {
    this.dispatch = dispatch;

    document.getElementById("plus").addEventListener("click", () => {
      dispatch(plusAction());
      dispatch(fetch());
    });

    document.getElementById("minus").addEventListener("click", () => {
      dispatch(minusAction());
      dispatch(fetch());
    });

    dispatch(fetch());
  }

  render(state) {
    const { count, list } = state;

    document.getElementById("counter").innerText = count;
    document.getElementById("repos").innerHTML = list
      .map(item => `<li><a href="${item.html_url}">${item.full_name}</a></li>`)
      .join("");
  }
}
