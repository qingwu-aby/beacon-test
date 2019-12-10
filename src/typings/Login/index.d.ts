declare namespace Login {
  interface IAuth {
    smsVerifyReq: () => {};
    auth: {
      msg?: string | '';
      code?: number;
      data?: Object | null;
    };
  }
}