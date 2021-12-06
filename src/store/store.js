import {compose, createStore} from 'redux';
import {rootReducer} from "./rootReducer";

export const store = createStore(
  rootReducer,
  compose(window.devToolsExtension ? window.devToolsExtension() : (f) => f)
);