// import { autorun } from "mobx";
// import CounterStore from "./src/mobx/store";

import configureStore from './src/store';
import App from "./src/app.js";

// const store = new CounterStore();
// ({ count: 5, list: [] });

const store = configureStore();

const app = new App(store);

store.subscribe(() => {
  app.render(store.getState());
})

// autorun(() => {
//   app.render(store);
// });
