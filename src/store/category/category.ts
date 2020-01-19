import { createActions } from 'redux-actions';
import { takeLatest, call, put } from 'redux-saga/effects';
import showToast from 'components/common/Toast';
import { getCategoryListModel } from 'services/category';

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
