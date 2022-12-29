import { describe, expect, test } from "@jest/globals";
import { isModifierOnly, keyboardEvent2text } from "../utils/shortcut-utils";

test("keyboardEvent2text", () => {
  let e = new KeyboardEvent("keyup", { ctrlKey: true, key: "a" });
  expect(keyboardEvent2text(e)).toBe("Ctrl + A");
  e = new KeyboardEvent("keyup", { ctrlKey: true });
  expect(keyboardEvent2text(e)).toBe("");
});
