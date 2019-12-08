const initState: State.IStore = {
  goods: {},
  personal: {},
  auth: {
    msg: '',
    code: -1,
    data: null
  },
}

const store = (state = initState) => {
  return state
}

export default store;
