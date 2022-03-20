import browser from "webextension-polyfill";
import u from "umbrellajs";
import { defaultSettings } from "../settings/default-settings";
import {
  isModifierOnly,
  keyboardEvent2shortcut,
  shortcut2text,
} from "../utils/shortcut-utils";
import { Settings } from "../types/index";
import { translate } from "../utils/translate";
import { log } from "../utils/log";
import { getSettings } from "../utils/settings";

translate();

// tabs control
u("#tabs button").on("click", function (e) {
  u("#tabs button").removeClass("pure-button-active");
  u(e.target).addClass("pure-button-active");

  u("#tab-contents > div").addClass("hidden");
  u("#tab-" + u(e.target).data("msg")).removeClass("hidden");
});

// init settings
getSettings((settings) => {
  u("#tab-shortcuts input").each(function (node) {
    const command = u(node).attr("id");
    const shortcut = settings.shortcuts[command];
    u(node).attr("value", shortcut2text(shortcut));
  });
  let newShortcuts = settings.shortcuts;
  shortcutsSettings(newShortcuts, settings);
  otherSettings(settings);
});

function shortcutsSettings(newShortcuts, settings) {
  u("#tab-shortcuts input")
    .not("#jump_to_result_keys")
    .on("keydown", function (e: KeyboardEvent) {
      if (e.key === "Tab") return;
      e.preventDefault();
      const input: HTMLInputElement = u(e.target).first();
      newShortcuts[input.id] = keyboardEvent2shortcut(e);
      input.value = shortcut2text(newShortcuts[input.id]);
    });

  // clear shortcut when click
  u("#jump_to_result_keys").on("click", function (e: MouseEvent) {
    const input = e.target as HTMLInputElement;
    input.value = "";
  });
  u("#jump_to_result_keys").on("keydown", function (e: KeyboardEvent) {
    if (e.key !== "Backspace" && e.key !== "Delete" && e.key !== "Tab") {
      e.preventDefault();
    }
    if (isModifierOnly(e.key) || e.key.length !== 1) return;

    const input: HTMLInputElement = u(e.target).first();

    if (input.value.length >= 10) {
      u("#jump_to_result_keys_inline_message").text(
        browser.i18n.getMessage("shortcut_too_long", 10)
      );
      return;
    }

    if (input.value.includes(e.key.toUpperCase())) {
      u("#jump_to_result_keys_inline_message").text(
        browser.i18n.getMessage("must_be_unique_list")
      );
      return;
    }

    u("#jump_to_result_keys_inline_message").text(
      browser.i18n.getMessage("valid_shortcut")
    );

    input.value += e.key.toUpperCase();
    newShortcuts[input.id] = input.value;
  });

  // reset shortcut
  u("#tab-shortcuts .reset").on("click", function (e) {
    const input = u(e.target).siblings("input").first();

    const command = input.id;
    const shortcut = defaultSettings.shortcuts[command];
    input.value = shortcut2text(shortcut);
  });

  // save shortcuts
  u("form").on("submit", () => {
    browser.storage.local
      .set({
        settings: { ...settings, shortcuts: newShortcuts },
      })
      .then(() => log("new shortcuts set: ", newShortcuts), alertError);
  });
}

function otherSettings(settings: Settings) {
  const otherSettings = settings["other_settings"];
  // init other settings
  // init style of selected settings
  u("#" + otherSettings["style_of_selected"]).attr("checked", true);

  // style settings
  u("[name=style_of_selected]").on("change", function (e) {
    otherSettings["style_of_selected"] = e.target.value;
    saveOtherSettings();
  });

  // init char to display
  u("form#char_to_display input").each(function (node) {
    node.value = otherSettings["char_to_display"][node.id];
  });

  u("form#char_to_display input").on("change", function (e) {
    otherSettings["char_to_display"][e.target.id] = e.target.value;
    saveOtherSettings();
  });

  // reset char to display
  u("#tab-other-settings .reset").on("click", function (e) {
    const input = u(e.target).siblings("input").first();

    input.value =
      defaultSettings["other_settings"]["char_to_display"][input.id];
  });

  // reset all settings
  u("#tab-other-settings #reset_all").on("click", function (e) {
    const result = confirm(browser.i18n.getMessage("confirm_reset_all"));
    if (result) {
      browser.storage.local.set({ settings: defaultSettings }).then(
        () => {
          log("reset all settings ok");
        },
        (err) => {
          alert(err);
        }
      );
    }
  });

  // debug mode
  u("#debug_checkbox").on("change", function (e) {
    otherSettings["debug_mode"] = e.target.checked;
    saveOtherSettings();
  });

  function saveOtherSettings() {
    browser.storage.local
      .set({
        settings: {
          ...settings,
          other_settings: otherSettings,
        },
      })
      .then(
        () => {
          log("other settings saved: ", otherSettings);
        },
        (err) => {
          alertError(err);
        }
      );
  }
}

function alertError(err) {
  alert(browser.i18n.getMessage("error_while_saving"));
  console.log(err);
}
