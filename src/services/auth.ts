import fetchReq from 'services/request';

const sendSMSModel = (opts: any) => {
  return fetchReq({
    method: 'POST',
    url: '/user/sendSMSVerify',
    headers: {
      'Host': 'm.intelldevel.com',
      'Content-type': 'application/json;charset=UTF-8',
    },
    data: {
      ...opts
    }
  })
}

export {
  sendSMSModel
}