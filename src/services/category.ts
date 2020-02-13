import fetchReq from 'services/request';

interface ICategory {
  preId?: number;
}

const getCategoryListModel = (opts: ICategory) => {
  const {
    preId = 0,
  } = opts;
  return fetchReq({
    method: 'GET',
    url: `/item/getCategoryList/${preId}`,
    params: {}
  })
}

export {
  getCategoryListModel,
}
