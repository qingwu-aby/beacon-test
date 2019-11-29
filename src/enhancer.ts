import {
  compose,
  createStore,
  applyMiddleware
} from 'redux';

import store from './store';
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = createStore(store, composeEnhancers(applyMiddleware()))

export {
  enhancer as default
}
