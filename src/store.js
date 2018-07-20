import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { createEpicMiddleware } from "redux-observable";
import createReducer from "./reducers";

// import rootSaga from "./saga";
const sagaMiddleware = createSagaMiddleware();
const epicMiddleware = createEpicMiddleware();

import rootEpic from "./epic";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState = {}) {
  const middlewares = [epicMiddleware];

  const enhancers = [applyMiddleware(...middlewares)];

  const store = createStore(
    createReducer(),
    initialState,
    composeEnhancers(...enhancers)
  );

  epicMiddleware.run(rootEpic);
  // sagaMiddleware.run(rootSaga);

  return store;
}
