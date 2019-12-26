import { createSelector } from 'reselect';
import { toCamel } from 'utils/index';
import { divide } from 'utils/precision';

const goodsSelector = state => state.goods.entities;

const getGoodsInfo = item => ({
  goodsName: item.itemName,
  itemId: item.itemId,
  marketPrice: divide(item.markingPrice, 100),
  price: divide(item.costPrice, 100),
  saleAmout: item.saleAmount
})

export const goodsInfoSelector = createSelector(
  goodsSelector,
  item => getGoodsInfo(item)
)

export const goodsSliderSelector = createSelector(
  goodsSelector,
  goodsInfoSelector,
  item => ({
    headImgList: item.headImgList
  })
)

export const goodsDetailSelector = createSelector(
  goodsSelector,
  goodsInfoSelector,
  goodsSliderSelector,
  item => ({
    goodsName: item.itemName,
    detailImgList: item.detailImgList
  })
)

export const goodsActivitySelector = createSelector(
  goodsSelector,
  goodsInfoSelector,
  goodsSliderSelector,
  goodsDetailSelector,
  item => ({
    activity: toCamel(item.activity)
  })
)
