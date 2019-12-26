import { createActions } from 'redux-actions';
import { takeLatest, call, put } from 'redux-saga/effects';
import showToast from 'components/common/Toast';
import { getGoodsModel } from 'services/goods';
import camelCase from 'camelcase';

const REQ_SUCCESS = 0;
export const {
  goods: {
    getGoodsReq,
    getGoodsReqSuccess,
    getGoodsReqFailed,
  }
}: any = createActions({
  GOODS: {
    GET_GOODS_REQ: null,
    GET_GOODS_REQ_SUCCESS: goods => goods,
    GET_GOODS_REQ_FAILED: null
  }
})

function* getGoodsReqSaga({ payload }) {
  try {
    const res = yield call(getGoodsModel, {
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
      yield put(getGoodsReqSuccess({goods: res.data}));
    }
  } catch (err) {
    yield put(getGoodsReqFailed(err));
  }
}

export function* watchGetGoods() {
  yield takeLatest(getGoodsReq, getGoodsReqSaga)
}

export const watchGoodsSagas = [watchGetGoods];

export default {
  [getGoodsReqSuccess]: (state, { payload: { goods } }) => ({
    // ...state,
    entities: {
      ...goods,
      status: 'complete'
    },
    loading: false
  }),
  [getGoodsReqFailed]: (state, { payload: { goods } }) => ({
    // ...state,
    loading: false,
    entities: {
      ...goods,
      status: 'failed'
    }
  })
}
