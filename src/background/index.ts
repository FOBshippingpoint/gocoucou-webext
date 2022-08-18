const browser = globalThis.browser ? globalThis.browser : globalThis.chrome

browser.runtime.onMessage.addListener((message) => {
  if (message.command === 'open_in_new_tab') {
    browser.tabs.create({ url: message.url, active: message.active })
  }
})
