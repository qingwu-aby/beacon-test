import { handleActions } from 'redux-actions';
import goodsReducer, { watchGoods } from './goods';

export const watchGoodsSaga = [...watchGoods];

export default handleActions(goodsReducer, {
  goods: {},
  loading: true
})
