import fetchReq from 'services/request';

const getGoodsModel = (opts: any) => {
  const { itemId } = opts;
  return fetchReq({
    method: 'GET',
    url: `/item/detail/${itemId}`
  })
}

export {
  getGoodsModel
}
