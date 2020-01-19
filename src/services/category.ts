import fetchReq from 'services/request';

const getCategoryListModel = (preId: number) => {
  return fetchReq({
    method: 'GET',
    url: `/item/getCategoryList/${preId}`,
    params: {}
  })
}

export {
  getCategoryListModel,
}
