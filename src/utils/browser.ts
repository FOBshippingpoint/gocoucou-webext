// // https://github.com/fregante/webext-detect-page/blob/main/index.ts
// /** Loosely detect Firefox via user agent */
// export const isFirefox = () =>
//   globalThis.navigator?.userAgent.includes("Firefox");

// /** Loosely detect Chrome via user agent (might also include Chromium and forks like Opera) */
// export const isChrome = () =>
//   globalThis.navigator?.userAgent.includes("Chrome");

// if (isFirefox()) {
//   let firefox = globalThis.browser;
// }

export const browser = globalThis.chrome
  ? globalThis.chrome
  : globalThis.browser;
