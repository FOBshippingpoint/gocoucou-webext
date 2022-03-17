import u from "umbrellajs";
import Cursor from "./Cursor";
import browser from "webextension-polyfill";

const defaultShortcuts = {
  "jump-to-result-keys": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
  upward: {
    ctrlKey: false,
    shiftKey: false,
    altKey: false,
    metaKey: false,
    key: "k",
  },
  downward: {
    ctrlKey: false,
    shiftKey: false,
    altKey: false,
    metaKey: false,
    key: "j",
  },
  "open-in-current-tab": {
    ctrlKey: false,
    shiftKey: false,
    altKey: false,
    metaKey: false,
    key: "Enter",
  },
  "open-in-new-tab-but-stay-on-current": {
    ctrlKey: true,
    shiftKey: false,
    altKey: false,
    metaKey: false,
    key: "Enter",
  },
  "open-in-new-tab-and-focus": {
    ctrlKey: true,
    shiftKey: true,
    altKey: false,
    metaKey: false,
    key: "Enter",
  },
};

let shortcuts = defaultShortcuts;

type Sokoban = {
  el: HTMLElement;
  href: string;
};

const sokobans: Sokoban[] = [];

// show ui
u("div")
  .filter(function (node) {
    return u(node).data("sokoban-container") !== null;
  })
  .each(function (node, i) {
    let key = shortcuts["jump-to-result-keys"][i];
    if (!key) {
      key = i % 2 === 0 ? "🦉" : "🐣";
    }
    u(node).before('<div class="btn">' + key + "</div>");
    const wrapper = u(node).wrap("<div class='sokoban-wrap'>").first();
    sokobans.push({ el: wrapper, href: u(node).find("a").attr("href") });
  });

const cursor = new Cursor(sokobans.length);

// log key at the end of the page
u("body").after("<div id='log'></div>");
document.addEventListener("keydown", logKey);
const log = document.getElementById("log");
function logKey(e) {
  log.textContent += ` ${e.key}`;
}

const modifierKeys = ["ctrlKey", "shiftKey", "altKey", "metaKey"];

document.addEventListener("keydown", (e) => {
  if (!shortcuts) return;

  // jump to the target sokoban
  if (modifierKeys.every((v) => e[v] === false)) {
    const index = shortcuts["jump-to-result-keys"].indexOf(e.key);
    if (index !== -1) {
      cursor.jumpTo(index);
      scroll();
      return;
    }
  }

  const command = shortcutMapping(e);
  switch (command) {
    case "upward":
      cursor.prev();
      scroll();
      break;
    case "downward":
      cursor.next();
      scroll();
      break;
    case "open-in-current-tab":
      window.location.assign(sokobans[cursor.index].href);
      return;
    case "open-in-new-tab-but-stay-on-current":
      browser.runtime.sendMessage({
        command: "open-in-new-tab",
        url: sokobans[cursor.index].href,
        active: false, // stay in current tab
      });
      break;
    case "open-in-new-tab-and-focus":
      browser.runtime.sendMessage({
        command: "open-in-new-tab",
        url: sokobans[cursor.index].href,
        active: true, // focus new tab
      });
      break;
    default:
      break;
  }
});

// scroll to the target sokoban
function scroll() {
  const sokoban = sokobans[cursor.index];
  sokoban.el.scrollIntoView({ block: "center" });
  sokobans.forEach((s, i) => {
    if (i === cursor.index) {
      u(s.el).addClass("focus");
    } else {
      u(s.el).removeClass("focus");
    }
  });
}

browser.storage.local.get({ shortcuts: defaultShortcuts }).then(
  (got) => {
    console.log("get: ", got);
    shortcuts = got.shortcuts;
  },
  (err) => {
    console.log("on error: ", err);
  }
);

function shortcutMapping(e: KeyboardEvent) {
  // debug print
  if (false) {
    ["ctrlKey", "shiftKey", "altKey", "metaKey", "key"].forEach((key) => {
      console.log(key, ":", e[key]);
    });
  }

  if (!defaultShortcuts) return;

  let command: string;
  for (const prop in defaultShortcuts) {
    const shortcut = defaultShortcuts[prop];
    if (Object.keys(shortcut).every((key) => shortcut[key] === e[key])) {
      command = prop;
      break;
    }
  }

  console.log("command: ", command);

  return command;
}
