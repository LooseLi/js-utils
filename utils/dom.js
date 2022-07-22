export function getElement(selector) {
  return selector && document.querySelector(selector);
}

export function hasClass(el, cls) {
  if (!el || !cls || !el.classList.length) return false;
  return el.classList.contains(cls);
}

export function addClass(el, cls) {
  if (!el) return;
  const classes = (cls || '').split(' ');
  for (let i = 0; i < classes.length; i++) {
    const clsName = classes[i];
    if (!clsName || hasClass(el, cls)) continue;
    el.classList.add(clsName);
  }
}
