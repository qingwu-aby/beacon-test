import { createSelector } from 'reselect';
import { toCamel } from 'utils/index'

const goodsSelector = state => state.goods.entities;

const getGoodsInfo = item => ({
  goodsName: item.goodsName,
  itemId: item.itemId,
  marketPrice: item.marketPrice,
  price: item.costPrice
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
