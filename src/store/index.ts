import { all, call } from 'redux-saga/effects';
import auth, { watchAuthSaga } from './auth';
import goods, { watchGoodsSaga } from './goods';
import list, { watchListSaga } from './list';
import category, { watchCategorySaga } from './category';

export const reducers = {
  auth,
  goods,
  list,
  category
};

export const sagas = function* rootSaga() {
  yield all(
    [
      ...watchAuthSaga,
      ...watchGoodsSaga,
      ...watchListSaga,
      ...watchCategorySaga,
    ].map(call)
  )
}
