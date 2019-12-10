import { createActions } from 'redux-actions';
import { takeLatest, call, put } from 'redux-saga/effects';
import { sendSMSModel, fastLoginModel } from 'services/auth';

const REQ_SUCCESS = 0;
export const {
  auth: {
    smsVerifyReq,
    smsVerifySuccess,
    smsVerifyFailed,
    fastLoginReq,
    fastLoginSuccess,
    fastLoginFailed
  }
}: any = createActions({
  AUTH: {
    SMS_VERIFY_REQ: null,
    SMS_VERIFY_SUCCESS: auth => auth,
    SMS_VERIFY_FAILED: null,
    FAST_LOGIN_REQ: null,
    FAST_LOGIN_REQ_SUCCESS: auth => auth,
    FAST_LOGIN_REQ_FAILED: null,
  }
})

function* smsVerifySaga({ payload }) {
  try {
    const res = yield call(sendSMSModel, {
      ...payload
    });
    if (res.code !== REQ_SUCCESS) {
      console.error(res.msg)
    } else {
      yield put(smsVerifySuccess({auth: res}));
    }
  } catch (err) {
    yield put(smsVerifyFailed(err));
  }
}

export function* watchSendSmsVerify() {
  yield takeLatest(smsVerifyReq, smsVerifySaga)
}

function* fastLoginReqSaga({ payload }) {
  try {
    const res = yield call(fastLoginModel, {
      ...payload
    });
    if (res.code !== REQ_SUCCESS) {
      console.error(res.msg)
    } else {
      yield put(fastLoginSuccess({auth: res}));
    }
  } catch (err) {
    yield put(fastLoginFailed(err));
  }
}

export function* watchFastLogin() {
  yield takeLatest(fastLoginReq, fastLoginReqSaga)
}

export const watchAuth = [watchSendSmsVerify, watchFastLogin];

export default {
  [smsVerifySuccess]: (state, { payload: { auth } }) => ({
    ...state,
    auth: {
      ...auth,
      status: 'complete'
    },
    loading: false
  }),
  [smsVerifyFailed]: (state, { payload: { auth } }) => ({
    ...state,
    auth: {
      ...auth,
      status: 'failed'
    }
  }),
  [fastLoginSuccess]: (state, { payload: { auth } }) => ({
    ...state,
    auth: {
      ...auth,
      status: 'complete'
    },
    loading: false
  }),
  [fastLoginFailed]: (state, { payload: { auth } }) => ({
    ...state,
    auth: {
      ...auth,
      status: 'failed'
    }
  }),
}
