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
