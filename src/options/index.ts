import browser from "webextension-polyfill";
import u from "umbrellajs";
import { Shortcut } from "../types";
import { defaultShortcuts } from "../settings/default-shortcuts";

// replace translated
u("[data-msg]").each(function (node) {
  const key = u(node).data("msg");
  const text = browser.i18n.getMessage(key);
  u(node).text(text === "" ? key : text);
});

browser.storage.local.get({ shortcuts: defaultShortcuts }).then(
  ({ shortcuts }) => {
    console.log(shortcuts);
    u("input").each(function (node) {
      const command = u(node).attr("id");
      const shortcut = shortcuts[command];
      u(node).attr("value", shortcut2Text(shortcut));
    });
  },
  (err) => {
    console.log(err);
  }
);

// init shortcuts

let os;
browser.runtime.getPlatformInfo().then((info) => {
  os = info.os;
});

let formShortcuts = {};

u("input").on("keydown", function (e: KeyboardEvent) {
  const input: HTMLInputElement = u(e.target).first();

  if (!input.id) return;

  formShortcuts[input.id] = {
    ctrlKey: e.ctrlKey,
    shiftKey: e.shiftKey,
    altKey: e.altKey,
    metaKey: e.metaKey,
    key: e.key,
  };

  e.preventDefault();
  input.value = shortcut2Text(formShortcuts[input.id]);
});

u("form").on("submit", () => {
  // ! no error handling
  browser.storage.local.set({
    shortcuts: formShortcuts,
  });
});

function shortcut2Text(shortcut: Shortcut) {
  const modifiers = [];
  if (shortcut.ctrlKey) modifiers.push("Ctrl");
  if (shortcut.shiftKey) modifiers.push("Shift");
  if (shortcut.altKey) modifiers.push("Alt");
  if (shortcut.metaKey) {
    if (os === "mac") {
      modifiers.push("⌘");
    } else if (os === "win") {
      modifiers.push("Win");
    }
  }

  let key = shortcut.key;
  if (["Control", "Shift", "Alt", "Meta"].includes(shortcut.key)) {
    key = "";
  } else if (key.length === 1) {
    key = key.toUpperCase();
  }

  if (modifiers.length > 0) {
    return modifiers.join("+") + (key === "" ? key : "+" + key);
  } else {
    return key;
  }
}
