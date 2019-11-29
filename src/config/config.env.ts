import { AxiosResponse, AxiosRequestConfig } from 'axios'
import qs from 'qs'

// const config: CONFIG.IConfig = {
//   api: {
//     uri: 'http://api.knight-yuan.top/',
//     timeout_s: 10,
//     retry_count: 3,
//     retry_delay_s: 1,
//   }
// }

const axiosConfig: AxiosRequestConfig = {
  baseURL: '/',
  transformResponse: [function(data: AxiosResponse) {
    return data
  }],
  paramsSerializer: params => qs.stringify(params),
  timeout: 10 * 1000,
  withCredentials: true,
  responseType: 'json',
  // proxy: {}
  // validateStatus: () => {}
}

export default axiosConfig;
