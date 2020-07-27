const NOW_DATE = Date.now();
const errorHandler = (e) => {
  const defaults = Object.assign({ ...this.params.initError }, {
    t: NOW_DATE,
    n: 'resource',
    msg: `${e.target.localName} is load error!`
  });
}

export {
  errorHandler
};
