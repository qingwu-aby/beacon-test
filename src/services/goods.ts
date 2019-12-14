import fetchReq from 'services/request';

interface IList {
  count: number;
  offset: number;
}

interface IGoods {
  itemId: number;
}

const getGoodsListModel = (opts: IList) => {
  const {
    count = 20,
    offset  
  } = opts;
  return fetchReq({
    method: 'GET',
    url: '/item/list',
    params: {
      count,
      offset
    }
  })
}

const getGoodsModel = (opts: IGoods) => {
  const { itemId } = opts;
  return fetchReq({
    method: 'GET',
    url: `/item/detail/${itemId}`
  })
}

export {
  getGoodsListModel,
  getGoodsModel
}
