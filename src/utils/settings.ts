import browser from "webextension-polyfill";
import { defaultSettings } from "../settings/default-settings";
import { Settings } from "../types/index";

export function getSettings(callback: (settings: Settings) => any) {
  browser.storage.local.get({ settings: defaultSettings }).then(
    (value) => {
      if (value.settings["other_settings"]["debug_mode"]) {
        console.log("getSettings:", value);
      }
      callback(value.settings);
    },
    (err) => {
      console.log("getSettings:", err);
    }
  );
}
