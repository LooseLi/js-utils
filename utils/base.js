import {isDate, isNumber, isString} from './is.js';

// 范围内随机取整
export function randomInt(min, max) {
  const c = max - min + 1;
  return Math.floor(Math.random() * c + min);
}

// 简单数组去重
export function arrayRepeat(arr) {
  return [...new Set(arr)];
}

/**
 * @param {*} time 时间戳|日期|字符串
 * @param {*} str yyyy-MM-dd --> 2022-07-25
 * @returns
 */
export function formatDate(time, str) {
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
}

/**
 * 数字千分位分隔符
 * @param {*} num 数字
 * 23456000 --> 23,456,000
 */
export function formatNum(num) {
  if (!isNumber(num)) return;
  return parseInt(num).toLocaleString();
}

/**
 * 截取字符串并加省略号
 * @param {*} str
 * @param {*} length
 * @returns
 */
export function subText(str, length) {
  if (str.length === 0) {
    return '';
  }
  if (str.length > length) {
    return str.substr(0, length) + '...';
  } else {
    return str;
  }
}

// 返回当前url
export const currentURL = () => window.location.href;
