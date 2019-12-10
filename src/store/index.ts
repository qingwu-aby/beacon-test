import { all, call } from 'redux-saga/effects'
import auth, { watchAuthSaga } from './auth'

export const reducers = [
  auth
];

export const sagas = function* rootSaga() {
  yield all(
    [
      ...watchAuthSaga,
    ].map(call)
  )
}