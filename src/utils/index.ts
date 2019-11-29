export const camelFormat  = (name: string) => name.replace(/(\_)(\w)/g, (s0, s1, s2) => {
  return s2.toUpperCase();
});
export const getQueryString = (name: string) => {
  const reg: RegExp = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i');
  const location = window.location.search.substr(1).match(reg);
  if (location !== null) {
    return decodeURIComponent(location[2]);
  }
  return null;
}
