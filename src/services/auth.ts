import fetchReq from 'services/request';

const sendSMSModel = (opts: any) => {
  return fetchReq({
    method: 'POST',
    url: '/user/sendSMSVerify',
    headers: {
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