import { describe, expect, test } from "@jest/globals";
import Cursor from "../content-scripts/Cursor";

describe("cursor", () => {
  const MAX_LENGTH = 5;
  const cursor = new Cursor(MAX_LENGTH);

  test("initial index", () => {
    expect(cursor.index).toBe(0);
  });

  test("upward", () => {
    cursor.upward();
    expect(cursor.index).toBe(MAX_LENGTH - 1);
    cursor.upward();
    expect(cursor.index).toBe(MAX_LENGTH - 2);
  });

  test("downward", () => {
    const cursor = new Cursor(MAX_LENGTH);
    cursor.downward();
    expect(cursor.index).toBe(1);
    cursor.downward();
    expect(cursor.index).toBe(2);
  });

  test("jump to", () => {
    cursor.jumpTo(1);
    expect(cursor.index).toBe(1);
    cursor.jumpTo(MAX_LENGTH);
    expect(cursor.index).toBe(1);
  });
});
