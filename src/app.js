import {api} from './api';

import {
  plusAction,
  minusAction,
  fetchCompleteAction,
} from './reducers/counterReducer'

export default class App {
  constructor(store) {
    document.getElementById("plus").addEventListener("click", () => {
      store.dispatch(plusAction());
    });

    document.getElementById("minus").addEventListener("click", () => {
      store.dispatch(minusAction());
    });

    api().then((result) => {
      store.dispatch(fetchCompleteAction({ list: result }));
    })
  }

  render(state) {
    const { count, list } = state.counter;

    document.getElementById("counter").innerText = count;
    document.getElementById("repos").innerHTML = list.slice(0, count)
      .map(item => `<li><a href="${item.html_url}">${item.full_name}</a></li>`)
      .join("");
  }
}
