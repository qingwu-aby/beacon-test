/**
 * @description axios请求拦截器
 */
import axios, { AxiosRequestConfig, AxiosError } from 'axios';
import axiosConfig from 'config/config.env';

let pending: Array<{
    url: string,
    cancel: Function,
}>;

const removePending = (config: AxiosRequestConfig) => {
    for (let p in pending) {
        if (pending.hasOwnProperty(p)) {
            let item: any = p;
            let list: any = pending[p];
            if (list.url === config.url + '&request_type=' + config.method) {
                list.cancel();
                pending.splice(item, 1);
            }
        }
    }
};

const service = axios.create(axiosConfig);

service.interceptors.request.use(
    config => {
        removePending(config);
        config.cancelToken = new axios.CancelToken(c => {
          pending.push({
            url: `${config.url}&request_type${config.method}`,
            cancel: c
          })
        })
        return config;
    },
    error => Promise.reject(error)
);

service.interceptors.response.use(
    res => {
        removePending(res.config);
        return res;
    },
    error => {
        return Promise.reject(error.response.data); 
    }
);

const errorHandler = (error: AxiosError): Api.IResponseData => {
  if (error.response) {
    return {
      msg: error.message,
      data: null,
      code: -1
    }
  }
  return {
    code: -1,
    data: null,
    msg: error.message
  }
}

export {
  service as default,
  errorHandler
}
