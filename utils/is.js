export const inBrowser = typeof window !== undefined;

const UA = inBrowser && window.navigator.userAgent.toLowerCase();

export const isEdge = UA && UA.indexOf('edge/') > 0;

export const isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

export const isAndroid = UA && UA.indexOf('android') > 0;

export const isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);

export const isString = value => {
  return Object.prototype.toString.call(value) === '[object String]';
};

export const isNumber = value => {
  return Object.prototype.toString.call(value) === '[object Number]';
};

export const isBoolean = value => {
  return Object.prototype.toString.call(value) === '[object Boolean]';
};

export const isObject = object => {
  return object !== null && Object.prototype.toString.call(object) === '[object Object]';
};

export const isDate = date => {
  return Object.prototype.toString.call(date) === '[object Date]';
};

export const isArray = arr => {
  return arr && Array.isArray(arr);
};
