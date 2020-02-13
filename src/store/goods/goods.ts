import { createActions } from 'redux-actions';
import { takeLatest, call, put } from 'redux-saga/effects';
import showToast from 'components/common/Toast';
import { getGoodsModel } from 'services/goods';
import { toCamel } from 'utils/index';
import { REQ_SUCCESS } from 'constants/index';

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
      yield put(getGoodsReqSuccess({goods: toCamel(res.data)}));
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
    ...state,
    entities: {
      ...goods,
    },
    loading: false
  }),
  [getGoodsReqFailed]: (state, { payload: { goods } }) => ({
    ...state,
    loading: false,
    entities: {
      ...goods,
    }
  })
}
