// 范围内随机取整
export function randomInt(min, max) {
  const c = max - min + 1;
  return Math.floor(Math.random() * c + min);
}

// 简单数组去重
export function arrayRepeat(arr) {
  return [...new Set(arr)];
}
