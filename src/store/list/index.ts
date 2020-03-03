import { handleActions } from 'redux-actions';
import reducer, { watchListSagas } from './list';

export const watchListSaga = [...watchListSagas];

const defaultState = {
  entities: {}
}

export default handleActions({
  ...reducer
}, defaultState)
