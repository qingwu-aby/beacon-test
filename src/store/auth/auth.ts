import { createActions, combineActions } from 'redux-actions';
import { takeLatest, call, put } from 'redux-saga/effects';
import { sendSMSModel } from 'services/auth';

export const {
  auth: {
    smsVerifyReq,
    smsVerifySuccess,
    smsVerifyFailed
  }
}: any = createActions({
  AUTH: {
    SMS_VERIFY_REQ: null,
    SMS_VERIFY_SUCCESS: auth => auth,
    SMS_VERIFY_FAILED: null,
  }
})

function* smsVerifySaga({ payload }) {
  try {
    const res = yield call(sendSMSModel, {
      body: {
        ...payload
      }
    });
    console.log('====res', res);
    yield put(smsVerifySuccess(res));
  } catch (err) {
    yield put(smsVerifyFailed(err));
  }
}

export function* watchSendSmsVerify() {
  yield takeLatest(smsVerifyReq, smsVerifySaga)
}

export const watchAuth = [watchSendSmsVerify];

export default {
  [smsVerifySuccess]: (state, { payload }) => ({
    sms: payload,
    loading: false
  }),
  [smsVerifyFailed]: (state) => ({
    ...state,
    loading: false
  })
}
