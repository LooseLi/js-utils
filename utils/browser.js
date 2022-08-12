// 返回当前url
export const currentURL = () => window.location.href;

// set localStorage
export const localStorageSet = (key, value) => {
  if (typeof value === 'object') value = JSON.stringify(value);
  localStorage.setItem(key, value);
};

// get localStorage
export const localStorageGet = key => {
  return localStorage.getItem(key);
};

// remove localStorage
export const localStorageRemove = key => {
  localStorage.removeItem(key);
};

// set sessionStorage
export const sessionStorageSet = (key, value) => {
  if (typeof value === 'object') value = JSON.stringify(value);
  sessionStorage.setItem(key, value);
};

// get sessionStorage
export const sessionStorageGet = key => {
  return sessionStorage.getItem(key);
};

// remove sessionStorage
export const sessionStorageRemove = key => {
  sessionStorage.removeItem(key);
};

/**
 * set cookie
 * @param {*} key
 * @param {*} value
 * @param {*} expire 过期时间(天数)
 */
export const cookieSet = (key, value, expire) => {
  const now = new Date();
  now.setDate(now.getDate() + expire);
  document.cookie = `${key}=${value};expires=${now.toUTCString()}`;
};

// get cookie
export const cookieGet = key => {
  const cookieStr = unescape(document.cookie);
  const arr = cookieStr.split(';');
  let cookieValue = '';
  for (let i = 0; i < arr.length; i++) {
    const temp = arr[i].split('=');
    if (temp[0] === key) {
      cookieValue = temp[1];
      break;
    }
  }
  return cookieValue;
};

// remove cookie
export const cookieRemove = key => {
  document.cookie = `${encodeURIComponent(key)}=;expires=${new Date()}`;
};
