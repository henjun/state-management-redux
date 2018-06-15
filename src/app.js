import { minus, plus, fetch } from "./thunk";

export default class App {
  constructor({ dispatch }) {
    this.dispatch = dispatch;

    document.getElementById("plus").addEventListener("click", () => {
      dispatch(plus());
    });

    document.getElementById("minus").addEventListener("click", () => {
      dispatch(minus());
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
