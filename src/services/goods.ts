import fetchReq from 'services/request';

interface IGoods {
  itemId: number;
}

const getGoodsModel = (opts: IGoods) => {
  const { itemId } = opts;
  return fetchReq({
    method: 'GET',
    url: `/item/detail/${itemId}`
  })
}

export {
  getGoodsModel
}
