import { handleActions } from 'redux-actions';
import reducer, { watchGoodsSagas } from './goods';

export const watchGoodsSaga = [...watchGoodsSagas];

const defaultState = {
  entities: {}
}

export default handleActions({
  ...reducer
}, defaultState)
