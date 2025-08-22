import { describe, it, expect } from "vitest";
import { isEven } from "../src/isEven.js";

describe("isEven()", () => {
  it("true para pares", () => {
    expect(isEven(4)).toBe(true);
  });

  it("false para impares", () => {
    expect(isEven(7)).toBe(false);
  });
});