const modifierKeys = "Control Shift Alt";
export function isModifierOnly(key: string) {
  return key.length > 1 && modifierKeys.includes(key);
}

export function keyboardEvent2text(keyboardEvent: KeyboardEvent) {
  // jump to result keys only
  if (Array.isArray(keyboardEvent)) {
    return keyboardEvent.join("");
  }

  const modifiers: String[] = [];
  if (keyboardEvent.ctrlKey) modifiers.push("Ctrl");
  if (keyboardEvent.shiftKey) modifiers.push("Shift");
  if (keyboardEvent.altKey) modifiers.push("Alt");

  let key = keyboardEvent.key;
  if (isModifierOnly(key)) {
    key = "";
  } else if (key === " ") {
    key = "Space";
  } else if (key.length === 1) {
    key = key.toUpperCase();
  }

  if (modifiers.length > 0) {
    return modifiers.join(" + ") + (key === "" ? key : " + " + key);
  } else {
    return key;
  }
}
