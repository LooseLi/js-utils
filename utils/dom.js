export const getElement = selector => {
  return selector && document.querySelector(selector);
};

export const hasClass = (el, cls) => {
  if (!el || !cls || !el.classList.length) return false;
  return el.classList.contains(cls);
};

// add class
export const addClass = (el, cls) => {
  if (!el) return;
  const classes = (cls || '').split(' ');
  for (let i = 0; i < classes.length; i++) {
    const clsName = classes[i];
    if (!clsName || hasClass(el, cls)) continue;
    el.classList.add(clsName);
  }
};

// remove class
export const removeClass = (el, cls) => {
  if (!el || !cls) return;
  const classes = (cls || '').split(' ');
  for (let i = 0; i < classes.length; i++) {
    const clsName = classes[i];
    if (!clsName) continue;
    el.classList.remove(clsName);
  }
};

// 元素的大小及其相对于视口的位置
export const getBoundingClientRect = el => {
  if (!el || !el.getBoundingClientRect) return;
  return el.getBoundingClientRect();
};
