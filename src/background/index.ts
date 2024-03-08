import platform from "../utils/platform";

platform.runtime.onMessage.addListener((message) => {
  if (message.command === 'open_in_new_tab') {
    platform.tabs.create({ url: message.url, active: message.active })
  }
})

platform.browserAction.onClicked.addListener(() => {
  platform.runtime.openOptionsPage();
})
