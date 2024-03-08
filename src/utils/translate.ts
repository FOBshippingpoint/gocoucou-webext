import platform from "./platform";
import { $$ } from "./dollars";

export function translate() {
	for (const el of $$("[data-i18n]")) {
		el.textContent = platform.i18n.getMessage(el.dataset.i18n);
	}
}
