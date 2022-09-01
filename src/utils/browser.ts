export const browser = globalThis.browser
  ? globalThis.browser
  : globalThis.chrome

export const isChrome = globalThis.chrome !== undefined
