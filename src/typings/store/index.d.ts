/// <reference path="./router.d.ts" />

declare namespace Store {
  interface IState {
    router: Router.IState;
    auth: IAuth;
    category: ICategory;
  }

  interface IAuth {
    auth: any;
  }

  interface ICategory {
    id,
    logo,
    name,
    pre_id,
    seq,
    status,
    create_time,
  }
}
