import { createActions } from 'redux-actions';

export const {
  loading: {
    setLoading
  }
}: any = createActions({
  LOADING: {
    SET_LOADING: null
  }
})
