const { createStore, applyMiddleware, compose } = window.Redux;

import createReducer from "./reducers";

export default function configureStore(initialState = {}) {
  const middlewares = [];

  const enhancers = [applyMiddleware(...middlewares)];

  const store = createStore(
    createReducer(),
    initialState,
    compose(...enhancers)
  );

  return store;
}
