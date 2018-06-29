import configureStore from "./src/store.js";
import App from "./src/app.js";

const store = configureStore({ counter: { count: 5, list: [] } });

const app = new App({ dispatch: store.dispatch, store: store });

store.subscribe(() => {
  app.render(store.getState().counter);
});
