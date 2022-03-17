import browser from "webextension-polyfill";
import { defaultShortcuts } from "../settings/default-shortcuts";

// browser.storage.local.set({
//   shortcuts: defaultShortcuts,
// });

browser.runtime.onMessage.addListener((message) => {
  if (message.command === "open-in-new-tab") {
    browser.tabs.create({ url: message.url, active: message.active });
  }
});
