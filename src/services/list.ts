import fetchReq from 'services/request';

interface IList {
  count: number;
  offset: number;
}

const getGoodsListModel = (opts: IList) => {
  const {
    count = 20,
    offset  
  } = opts;
  return fetchReq({
    method: 'GET',
    url: '/item/getBrandList',
    params: {
      count,
      offset
    }
  })
}

export {
  getGoodsListModel
}
