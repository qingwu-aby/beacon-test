declare namespace Store {
  interface IState {
    state: {
      auth: IAuth,
    }
  }

  interface IAuth {
    auth: any;
  }
}
