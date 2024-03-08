import { Settings } from "../types/index";
import { loadSettings } from "../utils/settings";
import { $, $$ } from "../utils/dollars";
import platform from "../utils/platform";
import Kikey from "../lib/kikey";

// todos:
// fix kikey event preventDefault
// fix option page

const isDarkmode =
	getComputedStyle(document.body).color == "rgb(189, 193, 198)";

class Sokobans extends Array<HTMLElement> {
	loopAt = (index: number) => {
		return this.at(index % this.length);
	};
	constructor(...items: HTMLElement[]) {
		super(...items);
	}
}

function updateSokobans(sokobans: Sokobans) {
	for (const old of $$(".sokoban-wrap")) {
		old.replaceWith(old.firstChild!);
	}
	sokobans.length = 0; // clear array
	for (const nativeSokoban of $$(
		".MjjYud:has(.VuuXrf):not(:has(.TzHB6b)),.TzHB6b.cLjAic.K7khPe",
	)) {
		const sokoban = document.createElement("div");
		sokoban.classList.add("sokoban-wrap");
		nativeSokoban.parentNode!.insertBefore(sokoban, nativeSokoban);
		sokoban.appendChild(nativeSokoban);
		nativeSokoban
			.querySelectorAll("div")
			.forEach((el) => (el.style.backgroundColor = "inherit"));
		sokoban.dataset.href = (
			nativeSokoban.querySelector("[href]") as HTMLAnchorElement
		).href;
		sokobans.push(sokoban);
	}
}

function main(settings: Settings) {
	const sokobans: Sokobans = new Sokobans();
	const { shortcuts } = settings;
	const focusClassName =
		"focus-" +
		settings.other_settings.sokoban_style +
		(isDarkmode ? "-dark" : "");

	const kikey = new Kikey();

	const observer = new MutationObserver((mutationList, observer) => {
		console.log("bern blade");
		updateSokobans(sokobans);
		markFocused(0);
		observer.disconnect();
		observer.observe($("#center_col")!, { subtree: true, childList: true });
	});
	observer.observe($("#center_col")!, { subtree: true, childList: true });

	let idx = 0;

	updateSokobans(sokobans);

	for (const [command, binding] of Object.entries(shortcuts)) {
		kikey.on(binding, () => {
			switch (command) {
				case "upward":
					markFocused(idx--);
					scroll();
					break;
				case "downward":
					markFocused(idx++);
					scroll();
					break;
				case "open_in_current_tab":
					const href = sokobans.loopAt(idx)?.dataset.href!;
					window.location.assign(href);
					return;
				case "open_in_new_tab_but_stay_on_current":
				case "open_in_new_tab_and_focus":
					// Since browser.tabs API cannot access in content script,
					// we need to use message API to communicates with background script.
					// ref: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#webextension_apis
					platform.runtime.sendMessage({
						command: "open_in_new_tab",
						url: sokobans.loopAt(idx)?.dataset.href,
						active: command == "open_in_new_tab_and_focus",
					});
					break;
				case "go_to_search_box": {
					// e.preventDefault();
					const input = $<HTMLInputElement>("#APjFqb")!;
					input.focus();
					// this will move cursor to the end
					const value = input.value;
					input.value = "";
					input.value = value;
					break;
				}
				case "go_to_search_box_and_select_text":
					// e.preventDefault();
					$<HTMLInputElement>("#APjFqb")!.select();
					break;
			}
		});
	}

	// scroll to the target sokoban
	function scroll() {
		sokobans.loopAt(idx)?.scrollIntoView({ block: "center" });
	}

	// mark sokoban at cursor position, and remove previous one
	function markFocused(toRemoveIdx: number) {
		sokobans.loopAt(toRemoveIdx)?.classList.remove(focusClassName);
		sokobans.loopAt(idx)?.classList.add(focusClassName);
	}
}

loadSettings(main);
