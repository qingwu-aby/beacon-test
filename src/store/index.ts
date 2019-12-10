import { all, call } from 'redux-saga/effects';
import auth, { watchAuthSaga } from './auth';
import goods, { watchGoodsSaga } from './goods';

export const reducers = [
  auth,
  goods,
];

export const sagas = function* rootSaga() {
  yield all(
    [
      ...watchAuthSaga,
      ...watchGoodsSaga
    ].map(call)
  )
}