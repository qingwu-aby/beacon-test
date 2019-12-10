import { handleActions } from 'redux-actions';
import authReducer, { watchAuth } from './auth';

export const watchAuthSaga = [...watchAuth]

export default handleActions(authReducer, {
  auth: {},
  loading: true
})
