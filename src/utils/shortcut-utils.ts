import { Shortcut } from "../types";
import browser from "webextension-polyfill";
import { log } from "./log";

let os: browser.Runtime.PlatformOs;
browser.runtime.getPlatformInfo().then((info) => {
  os = info.os;
});

const modifierKeys = ["Control", "Shift", "Alt", "Meta"];
export function isModifierOnly(key: string) {
  return modifierKeys.includes(key);
}

export function keyboardEvent2shortcut(e: KeyboardEvent): Shortcut {
  let shortcut = {
    ctrlKey: e.ctrlKey,
    shiftKey: e.shiftKey,
    altKey: e.altKey,
    metaKey: e.metaKey,
    key: e.key,
  };

  return shortcut;
}

export function shortcut2text(shortcut: Shortcut | string[]) {
  // jump to result keys only
  if (Array.isArray(shortcut)) {
    return shortcut.join("");
  }

  const modifiers = [];
  if (shortcut.ctrlKey) modifiers.push("Ctrl");
  if (shortcut.shiftKey) modifiers.push("Shift");
  if (shortcut.altKey) modifiers.push("Alt");
  if (shortcut.metaKey) {
    if (os === "mac") {
      log("Mac OS detected, use ⌘");
      modifiers.push("⌘");
    } else if (os === "win") {
      log("Windows detected, use Win");
      modifiers.push("Win");
    }
  }

  let key = shortcut.key;
  if (isModifierOnly(shortcut.key)) {
    key = "";
  } else if (key === " ") {
    key = "Space";
  } else if (key.length === 1) {
    key = key.toUpperCase();
  }

  if (modifiers.length > 0) {
    return modifiers.join("+") + (key === "" ? key : "+" + key);
  } else {
    return key;
  }
}
