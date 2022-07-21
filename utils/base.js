export function randomInt(min, max) {
  const c = max - min + 1;
  return Math.floor(Math.random() * c + min);
}

export function arrayRepeat(arr) {
  return [...new Set(arr)];
}
