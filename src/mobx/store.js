import { action, computed, observable, extendObservable } from "mobx";

import { api } from "../api";

export default class CounterStore {
  @observable
  count = 0;
  @observable
  list = [];
  constructor({ list = [], count = 0 } = {}) {
    this.list = list;
    this.count = count;
    // extendObservable(this, {
    //   count,
    //   list
    // });
  }

  @action
  async fetch() {
    const repos = await api();

    this.list = repos.slice(0, this.count);
  }

  @action
  inc() {
    this.count++;
  }

  @action
  dec() {
    this.count--;
  }
}
