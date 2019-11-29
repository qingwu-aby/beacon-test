import service, { errorHandler } from 'utils/request'

const get = (url: string, params: any) => {
  return service.get(url, {
    params,
    headers: {}
  })
  .then(res => {})
  .catch(errorHandler)
};

const post = (url: string, params: any, data: any) => {
  return service.post(url, {
    params,
    data,
    headers: {}
  })
  .then(res => {})
  .catch(errorHandler)
};

const fetch = (url: string, params: any, data: any) => {
  return service.post(url, {
    params,
    data,
    headers: {}
  })
  .then(res => {})
  .catch(errorHandler)
};

export default {
  get,
  post,
  fetch
}
