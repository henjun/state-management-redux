import { api } from './api';

import {
  plusAction,
  minusAction,
  fetchCompleteAction,
} from './reducers/counterReducer'

export default class App {
  constructor(store) {
    this.store = store;
  }

  initListener(){
    document.getElementById("plus").addEventListener("click", () => {
      console.log('213')
      this.store.dispatch(plusAction());
    });

    document.getElementById("minus").addEventListener("click", () => {
      this.store.dispatch(minusAction());
    });
  }

  fetchList() {
    return api().then((result) => {
      this.store.dispatch(fetchCompleteAction({ list: result }));
    });
  }

  render(state) {
    console.log(state);
    const { count, list } = state.counter;

    document.getElementById("counter").innerText = count;
    document.getElementById("repos").innerHTML = list.slice(0, count)
      .map(item => `<li><a href="${item.html_url}">${item.full_name}</a></li>`)
      .join("");
  }
}
