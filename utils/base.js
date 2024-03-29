import {isDate, isNumber, isString} from './is.js';

// 范围内随机取整
export const randomInt = (min, max) => {
  const c = max - min + 1;
  return Math.floor(Math.random() * c + min);
};

// 简单数组去重
export const arrayRepeat = arr => {
  return [...new Set(arr)];
};

/**
 * @param {*} time 时间戳|日期|字符串
 * @param {*} str yyyy-MM-dd --> 2022-07-25
 * @returns
 */
export const formatDate = (time, str) => {
  let t = time;
  if (!isDate(time)) {
    if (isNumber(time) || isString(time)) {
      t = new Date(time);
    }
  }
  const obj = {
    yyyy: t.getFullYear(),
    yy: ('' + t.getFullYear()).slice(-2),
    M: t.getMonth() + 1,
    MM: ('0' + (t.getMonth() + 1)).slice(-2),
    d: t.getDate(),
    dd: ('0' + t.getDate()).slice(-2),
    H: t.getHours(),
    HH: ('0' + t.getHours()).slice(-2),
    h: t.getHours() % 12,
    hh: ('0' + (t.getHours() % 12)).slice(-2),
    m: t.getMinutes(),
    mm: ('0' + t.getMinutes()).slice(-2),
    s: t.getSeconds(),
    ss: ('0' + t.getSeconds()).slice(-2),
    w: ['日', '一', '二', '三', '四', '五', '六'][t.getDay()],
  };
  return str.replace(/([a-z]+)/gi, function ($1) {
    return obj[$1];
  });
};

/**
 * 数字千分位分隔符
 * @param {*} num 数字
 * 23456000 --> 23,456,000
 */
export const formatNum = num => {
  if (!isNumber(num)) return;
  return parseInt(num).toLocaleString();
};

/**
 * 手机号中间四位变成*
 * @param {*} tel
 * @returns
 * 19122223456 --> 191****3456
 */
export const formatTel = tel => {
  tel = String(tel);
  return tel.substr(0, 3) + '****' + tel.substr(7);
};

/**
 * 截取字符串并加省略号
 * @param {*} str
 * @param {*} length
 * @returns
 */
export const subText = (str, length) => {
  if (str.length === 0) {
    return '';
  }
  if (str.length > length) {
    return str.substr(0, length) + '...';
  } else {
    return str;
  }
};

/**
 * base64ToFile
 * @param {*} base64
 * @param {*} filename
 * @returns
 */
export const base64ToFile = (base64, filename) => {
  const arr = base64.split(',');
  const mime = arr[0].match(/:(.*?);/)[1];
  // 图片后缀
  const suffix = mime.split('/')[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], `${filename}.${suffix}`, {type: mime});
};

/**
 * base64ToBlob
 * @param {*} base64
 * @returns
 */
export const base64ToBlob = base64 => {
  let arr = base64.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], {type: mime});
};
