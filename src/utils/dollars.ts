export function $<T extends Element>(selector: string): T | null {
	return document.querySelector<T>(selector);
}

export function $$<T extends Element>(selector: string): T[] {
	return [...document.querySelectorAll<T>(selector)];
}
