const browser = globalThis.chrome ? globalThis.chrome : globalThis.browser;

browser.runtime.onMessage.addListener((message) => {
  if (message.command === "open_in_new_tab") {
    browser.tabs.create({ url: message.url, active: message.active });
  }
});
