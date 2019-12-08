declare namespace State {
  interface IStore {
    goods?: any;
    personal?: any;
    auth: IAuth;
  }

  interface IAuth {
    code: number;
    msg: string;
    data: object| null
  }
}