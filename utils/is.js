export const inBrowser = typeof window !== undefined;

const UA = inBrowser && window.navigator.userAgent.toLowerCase();

export const isEdge = UA && UA.indexOf('edge/') > 0;

export const isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

export const isAndroid = UA && UA.indexOf('android') > 0;

export const isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
