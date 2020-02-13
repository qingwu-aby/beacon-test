import { createActions } from 'redux-actions';
import { takeLatest, call, put } from 'redux-saga/effects';
import showToast from 'components/common/Toast';
import { getCategoryListModel } from 'services/category';
import { REQ_SUCCESS } from 'constants/index'

export const {
  category: {
    fetchCategoryReq,
    fetchCategoryReqSucc,
    fetchCategoryReqFailed
  }
}: any = createActions({
  CATEGORY: {
    FETCH_CATEGORY_REQ: null,
    FETCH_CATEGORY_REQ_SUCC: category => category,
    FETCH_CATEGORY_REQ_FAILED: null
  }
})

// fetchCategory
function* fetchCategoryReqSaga({ payload }) {
  try {
    const res = yield call(getCategoryListModel, {
      ...payload
    })
    if (res.code !== REQ_SUCCESS) {
      const opts = {
        duration: 4,
        iconCls: "icon-cards_museum_cancel",
        message: res.msg
      }
      showToast(opts);
    } else {
      yield put(fetchCategoryReqSucc({category: res.data}));
    }
  } catch (err) {
    yield fetchCategoryReqFailed(err)
  }
}


export function* watchGetCategory() {
  yield takeLatest(fetchCategoryReq, fetchCategoryReqSaga)
}

export const watchCategorySagas = [watchGetCategory];

export default {
  [fetchCategoryReqSucc]: (state, { payload: { category } }) => ({
    ...state,
    list: category,
    loading: false
  }),
  [fetchCategoryReqFailed]: (state, { payload: { category } }) => ({
    ...state,
    loading: false,
    list: category
  })
}