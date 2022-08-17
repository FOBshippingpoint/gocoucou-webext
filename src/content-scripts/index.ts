import u from "umbrellajs";
import Cursor from "./Cursor";
import browser from "webextension-polyfill";
import { Sokoban, Settings } from "../types/index";
import { getSettings } from "../utils/settings";
import { log } from "../utils/log";
import { keyboardEvent2text } from "../utils/shortcut-utils";

// determine if the current page is dark mode using logo img src
let darkmode = true;
if (u("#logo img").attr("src").search("light") === -1) {
  darkmode = false;
}

getSettings(main);

function main(settings: Settings) {
  const sokobans: Sokoban[] = [];
  const { shortcuts } = settings;

  // the old way: search for sokoban
  // u("div[data_sokoban_container]")

  // the new way: search for "http"'s "h"
  u("cite")
    .filter(function (node) {
      return u(node).text().search("h") !== -1;
    })
    .closest("[data-hveid][data-ved]")
    .each(function (node, i) {
      let key = shortcuts["jump_to_result_keys"][i];
      // if result is greater than keys, use two symbols to represent it
      if (!key) {
        key =
          i % 2 === 0
            ? settings["other_settings"]["char_to_display"]["even"]
            : settings["other_settings"]["char_to_display"]["odd"];
      }
      u(node).before(
        `<div class="${darkmode ? "flag-dark" : "flag"}">${key}</div>`
      );
      const wrapper = u(node).wrap("<div class='sokoban-wrap'>").first();
      sokobans.push({ el: wrapper, href: u(node).find("a").attr("href") });
    });

  const cursor = new Cursor(sokobans.length);
  // mark first result
  mark();

  const searchTypeLinks = {};
  u(".hdtb-mitem a").each(function (node, i) {
    const href = u(node).attr("href");
    switch (i) {
      case 0:
        searchTypeLinks["image"] = href;
        break;
      case 1:
        searchTypeLinks["news"] = href;
        break;
      case 2:
        searchTypeLinks["video"] = href;
        break;
      case 3:
        searchTypeLinks["books"] = href;
        break;
    }
  });

  const pageLinks = {
    next: u("#pnnext").attr("href"),
    prev: u("#pnprev").attr("href"),
  };

  document.addEventListener("keydown", (e) => {
    // prevent trigger shortcut when typing
    if (u(e.target).is("input")) return;

    const mapped = commandMapping(e);
    switch (mapped) {
      case "upward":
        cursor.upward();
        scroll();
        mark();
        break;
      case "downward":
        cursor.downward();
        scroll();
        mark();
        break;
      case "jump_to_result_keys":
        const key = keyboardEvent2text(e);
        cursor.jumpTo(shortcuts.jump_to_result_keys.indexOf(key));
        scroll();
        mark();
        break;
      case "open_in_current_tab":
        window.location.assign(sokobans[cursor.index].href);
        return;
      case "open_in_new_tab_but_stay_on_current":
        browser.runtime.sendMessage({
          command: "open_in_new_tab",
          url: sokobans[cursor.index].href,
          active: false, // stay in current tab
        });
        break;
      case "open_in_new_tab_and_focus":
        browser.runtime.sendMessage({
          command: "open_in_new_tab",
          url: sokobans[cursor.index].href,
          active: true, // focus new tab
        });
        break;
      case "switch_to_image":
        window.location.assign(searchTypeLinks["image"]);
        break;
      case "switch_to_news":
        window.location.assign(searchTypeLinks["news"]);
        break;
      case "switch_to_video":
        window.location.assign(searchTypeLinks["video"]);
        break;
      case "switch_to_books":
        window.location.assign(searchTypeLinks["books"]);
        break;
      case "next_page":
        if (pageLinks.next) {
          window.location.assign(pageLinks.next);
        }
        break;
      case "previous_page":
        if (pageLinks.prev) {
          window.location.assign(pageLinks.prev);
        }
        break;
    }
  });

  // scroll to the target sokoban
  function scroll() {
    const sokoban = sokobans[cursor.index];
    sokoban.el.scrollIntoView({ block: "center" });
  }

  function mark() {
    let className = "focus-" + settings["other_settings"]["style_of_selected"];
    if (darkmode) {
      className += "-dark";
    }
    log("switch dark mode class name: ", className);
    sokobans.forEach((s, i) => {
      if (i === cursor.index) {
        u(s.el).addClass(className);
      } else {
        u(s.el).removeClass(className);
      }
    });
  }

  function commandMapping(e: KeyboardEvent): string | undefined {
    const shortcut = keyboardEvent2text(e);
    log("keyboard event key: ", e.key, ", shortcut: ", shortcut);
    if (shortcuts.jump_to_result_keys.includes(shortcut)) {
      return "jump_to_result_keys";
    }

    return Object.keys(shortcuts).find((key) => shortcuts[key] === shortcut);
  }
}
