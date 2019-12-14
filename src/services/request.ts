import Qs from 'qs';
import camelCase from 'camelcase';

export enum ContentType {
  json = 'application/json;charset=UTF-8',
}

export enum Method {
  get = 'GET',
  post = 'POST',
  put = 'PUT',
  delete = 'DELETE',
}

type TReq = {
  url: string,
  data?: object,
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE',
  params?: object,
  headers?: any,
  AccessToken?: string,
}

const baseUrl = 'https://m.intelldevel.com/api';

const fetchReq = ({
  url,
  data,
  method,
  params,
  headers
}: TReq) => {
  url = baseUrl + url;
  if (params) {
    url = `${url}?${paramsSerializer(params)}`;
  }

  return new Promise((resolve, reject) => {
    fetch(url, {
      method: method ? method : 'GET',
      headers: {
        'Host': 'm.intelldevel.com',
        'Content-type': 'application/json;charset=UTF-8',
        // 'Content-Type': ContentType.json,
        ...headers,
      },
      body: JSON.stringify(data),
    })
    .then(resData => resData.json())
    .then(res => resolve({
        data: res.data,
        serverTime: res.t || Date.now(),
        code: res.code,
        msg: res.msg || 'success'
    }))
    .catch(err => reject({
      ...err,
      code: -1,
      msg: 'err'
    }));
  })
}

const paramsSerializer = (params: any) => {
  return Qs.stringify(params, {
    arrayFormat: 'brackets',
  });
};

export {
  fetchReq as default
}
