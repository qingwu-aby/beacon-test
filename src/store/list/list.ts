import { createActions } from 'redux-actions';
import { takeLatest, call, put } from 'redux-saga/effects';
import showToast from 'components/common/Toast';
import { getGoodsListModel } from 'services/list';

const REQ_SUCCESS = 0;
export const {
  list: {
    fetchListReq,
    fetchListReqSuccess,
    fetchListReqFailed,
  }
}: any = createActions({
  LIST: {
    FETCH_LIST_REQ: null,
    FETCH_LIST_REQ_SUCCESS: list => list,
    FETCH_LIST_REQ_FAILED: null
  }
})

function* fetchListReqSaga({ payload }) {
  try {
    const res = yield call(getGoodsListModel, {
      ...payload
    });
    if (res.code !== REQ_SUCCESS) {
      const opts = {
        duration: 4,
        iconCls: "icon-cards_museum_cancel",
        message: res.msg
      }
      showToast(opts);
    } else {
      yield put(fetchListReqSuccess({list: res.data}));
    }
  } catch (err) {
    yield put(fetchListReqFailed(err));
  }
}

export function* watchfetchList() {
  yield takeLatest(fetchListReq, fetchListReqSaga)
}

export const watchListSagas = [watchfetchList];

export default {
  [fetchListReqSuccess]: (state, { payload: { list } }) => ({
    ...state,
    entities: {
      ...list,
      status: 'complete'
    }
  }),
  [fetchListReqFailed]: (state, { payload: { list } }) => ({
    ...state,
    entities: {
      ...list,
      status: 'failed'
    }
  })
}
