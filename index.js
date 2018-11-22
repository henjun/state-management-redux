// import { autorun } from "mobx";
// import CounterStore from "./src/mobx/store";

import configureStore from './src/store';
import App from "./src/app.js";
// import { appendFileSync } from 'fs';

// const store = new CounterStore();
// ({ count: 5, list: [] });

const store = configureStore();

const app = new App(store);
app.initListener();
app.fetchList()
  .then(() => {
    store.subscribe(() => {
      app.render(store.getState());
    })
  })

// autorun(() => {
//   app.render(store);
// });
