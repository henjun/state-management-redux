// import { autorun } from "mobx";
// import CounterStore from "./src/mobx/store";

import configureStore from './src/store';
import App from "./src/app.js";
// import { appendFileSync } from 'fs';

// const store = new CounterStore();
// ({ count: 5, list: [] });
(async () => {
  const store = configureStore();

  const app = new App(store);
  
  // 비동기로 데이터가 그려지는 부분.
  store.subscribe(() => {
    app.render(store.getState());
  });
  
  await app.fetchList();
  app.initListener();
})();



// autorun(() => {
//   app.render(store);
// });
