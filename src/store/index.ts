import { all, call } from 'redux-saga/effects';
import auth, { watchAuthSaga } from './auth';
import goods, { watchGoodsSaga } from './goods';
import list, { watchListSaga } from './list';

export const reducers = {
  auth,
  goods,
  list,
};

export const sagas = function* rootSaga() {
  yield all(
    [
      ...watchAuthSaga,
      ...watchGoodsSaga,
      ...watchListSaga,
    ].map(call)
  )
}
