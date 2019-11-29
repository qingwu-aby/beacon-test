declare namespace Api {
  export interface IResponseData {
    data: any;
    code: number;
    msg: string;
    reqId?: string;
  }
}
