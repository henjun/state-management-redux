import { autorun } from "mobx";
import CounterStore from "./src/mobx/store";
import App from "./src/app.js";

const store = new CounterStore();
// ({ count: 5, list: [] });

const app = new App({ store });

autorun(() => {
  app.render(store);
});
