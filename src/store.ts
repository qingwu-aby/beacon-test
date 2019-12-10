import {
  compose,
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux';

import { reducers, sagas } from 'store/index';
import createSagaMiddleware from 'redux-saga'
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware];
const store = createStore(
  combineReducers(reducers),
  composeEnhancers(applyMiddleware(...middlewares))
)
sagaMiddleware.run(sagas)

export {
  store as default
}
