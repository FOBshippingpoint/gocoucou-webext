import { expect, test } from "@jest/globals";
import { keyboardEvent2text } from "../utils/shortcut-utils";

test("keyboardEvent2text", () => {
  let e = new KeyboardEvent("keyup", { ctrlKey: true, key: "a" });
  expect(keyboardEvent2text(e)).toBe("Ctrl + A");
  e = new KeyboardEvent("keyup", { ctrlKey: true, key: "Control" });
  expect(keyboardEvent2text(e)).toBe("Ctrl");
});
