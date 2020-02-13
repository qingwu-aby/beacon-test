declare namespace Router {
  interface IBaseLocation {
    hash: string
    key?: string
    pathname: string
    search: string
  }

  interface ILocation extends IBaseLocation {
    state?: {
      from: IBaseLocation
      [key: string]: any
    }
  }

  interface IState {
    action: string
    location: ILocation
  }
}
