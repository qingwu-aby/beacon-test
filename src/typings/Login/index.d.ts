declare namespace Login {
  interface IAuth {
    auth: {
      msg?: string | '';
      code?: number;
      data?: Object | null;
    };
  }
}