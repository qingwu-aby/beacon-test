// use camelcase
// export const camelFormat  = (name: string) => name.replace(/(\_)(\w)/g, (s0, s1, s2) => {
//   return s2.toUpperCase();
// });
import camelCase from 'camelcase';

export const getQueryString = (name: string) => {
  const reg: RegExp = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i');
  const location = window.location.search.substr(1).match(reg);
  if (location !== null) {
    return decodeURIComponent(location[2]);
  }
  return null;
}

export const toCamel = param => {
  if (typeof param === 'string') {
    return camelCase(param)
  } else if (param instanceof Object) {
    return Object.keys(param).reduce((acc, key) => {
      acc[camelCase(key)] = param[key];
      return acc;
    }, {});
  }
  return camelCase(param)
}

export class ClickUtils {
  static timeStamps: number[] = [];
  static multiClick(callback, times = 8, duration = 2000) {
    const timeStamp: number = Date.now();
    this.timeStamps.push(timeStamp);
    if (this.timeStamps.length === times) {
      if (this.timeStamps[times - 1] - this.timeStamps[0] < duration) {
        callback();
      }
      this.timeStamps = [];
    }
  }
}
