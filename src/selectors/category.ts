import { createSelector } from 'reselect';
import { produce } from 'immer';
import { toCamel } from 'utils/index';

const categorySelector = state => state.category.list;

export const categoryListSelector = createSelector(
  categorySelector,
  category => produce(category, draft => 
    (category || []).map(item => toCamel(item))
  )
)
