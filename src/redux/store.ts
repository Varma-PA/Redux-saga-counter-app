import rootReducer from "./reducers/index";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import sagaMiddleWare from "redux-saga";
import { watchAgeGoUp } from "./saga/root-saga";

const theSagaMiddleWare = sagaMiddleWare();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(theSagaMiddleWare))
);

theSagaMiddleWare.run(watchAgeGoUp);
export default store;
