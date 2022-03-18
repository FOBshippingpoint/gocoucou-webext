import browser from "webextension-polyfill";
import u from "umbrellajs";
import { defaultShortcuts } from "../settings/default-shortcuts";
import {
  isModifierOnly,
  keyboardEvent2shortcut,
  shortcut2text,
} from "../utils/shortcut-utils";

// translate
u("[data-msg]").each(function (node) {
  const key = u(node).data("msg");
  const text = browser.i18n.getMessage(key);
  u(node).text(text === "" ? key : text);
});

let formShortcuts = {};

// init shortcuts
browser.storage.local.get({ shortcuts: defaultShortcuts }).then(
  ({ shortcuts }) => {
    console.log(shortcuts);
    u("input").each(function (node) {
      const command = u(node).attr("id");
      const shortcut = shortcuts[command];
      console.log("shortcut", command, shortcut);
      u(node).attr("value", shortcut2text(shortcut));
    });
    formShortcuts = shortcuts;
  },
  (err) => {
    console.log(err);
  }
);

u("input")
  .not("#jump-to-result-keys")
  .on("keydown", function (e: KeyboardEvent) {
    if (e.key === "Tab") return;
    e.preventDefault();
    const input: HTMLInputElement = u(e.target).first();
    formShortcuts[input.id] = keyboardEvent2shortcut(e);
    input.value = shortcut2text(formShortcuts[input.id]);
  });

// clear shortcut when click
u("#jump-to-result-keys").on("click", function (e: MouseEvent) {
  const input = e.target as HTMLInputElement;
  input.value = "";
});
u("#jump-to-result-keys").on("keydown", function (e: KeyboardEvent) {
  if (e.key !== "Backspace" && e.key !== "Delete" && e.key !== "Tab") {
    e.preventDefault();
  }
  if (isModifierOnly(e.key) || e.key.length !== 1) return;

  const input: HTMLInputElement = u(e.target).first();

  if (input.value.length >= 10) {
    console.log("too-long");
    u("#jump-to-result-keys-inline-message").text(
      browser.i18n.getMessage("shortcut-too-long", 10)
    );
    return;
  }

  if (input.value.includes(e.key.toUpperCase())) {
    u("#jump-to-result-keys-inline-message").text(
      browser.i18n.getMessage("must-be-unique-list")
    );
    return;
  }

  u("#jump-to-result-keys-inline-message").text(
    browser.i18n.getMessage("valid-shortcut")
  );

  input.value += e.key.toUpperCase();
  formShortcuts[input.id] = input.value;
});

u(".reset").on("click", function (e) {
  const input = u(e.target).siblings("input").first();
  console.log(input);

  const command = input.id;
  const shortcut = defaultShortcuts[command];
  input.value = shortcut2text(shortcut);
});

u("form").on("submit", () => {
  browser.storage.local
    .set({
      shortcuts: formShortcuts,
    })
    .then(
      () => {
        console.log("set: ", formShortcuts);
      },
      (err) => {
        console.log(err);
      }
    );
});
