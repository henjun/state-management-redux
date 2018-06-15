import {
  fetchCompleteAction,
  minusAction,
  plusAction
} from "./reducers/counterReducer.js";
import { api } from "./api";

export default class App {
  constructor({ dispatch }) {
    this.dispatch = dispatch;

    document.getElementById("plus").addEventListener("click", () => {
      this.dispatch(plusAction());

      this.requestApi();
    });

    document.getElementById("minus").addEventListener("click", () => {
      this.dispatch(minusAction());

      this.requestApi();
    });

    this.requestApi();
  }

  async requestApi() {
    const repos = await api();

    this.dispatch(
      fetchCompleteAction({
        list: repos
      })
    );
  }

  render(state) {
    const { count, list } = state;

    document.getElementById("counter").innerText = count;
    document.getElementById("repos").innerHTML = list
      .map(item => `<li><a href="${item.html_url}">${item.full_name}</a></li>`)
      .join("");
  }
}
