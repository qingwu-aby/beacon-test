import { handleActions } from 'redux-actions';
import reducer, { watchCategorySagas } from './category';

export const watchCategorySaga = [...watchCategorySagas];

const defaultState = {
  loading: true,
  list: []
}

export default handleActions({
  ...reducer
}, defaultState)
