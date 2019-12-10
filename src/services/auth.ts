import fetchReq from 'services/request';

const sendSMSModel = (opts: any) => {
  return fetchReq({
    method: 'POST',
    url: '/user/sendSMSVerify',
    data: {
      ...opts
    }
  })
}

const logoutModel = (opts: any) => {
  return fetchReq({
    method: 'POST',
    url: '/url/logout',
    data: {
      ...opts
    }
  })
}

const fastLoginModel = (opts: any) => {
  return fetchReq({
    method: 'POST',
    url: '/url/fastLogin',
    data: {
      ...opts
    }
  })
}

const wechatLoginModel = (opts: any) => {
  return fetchReq({
    method: 'POST',
    url: '/url/wxH5Login',
    data: {
      ...opts
    }
  })
}

const bindPhoneModel = (opts: any) => {
  return fetchReq({
    method: 'POST',
    url: '/url/wxBindPhone',
    data: {
      ...opts
    }
  })
}

export {
  logoutModel,
  sendSMSModel,
  fastLoginModel,
  wechatLoginModel,
  bindPhoneModel
}