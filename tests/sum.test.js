import { describe, it, expect } from "vitest";
import { sum } from "../src/sum.js";

describe("sum()", () => {
  it("suma dos números", () => {
    expect(sum(2, 4)).toBe(5);
  });

  it("convierte strings numéricos", () => {
    expect(sum("10", "7")).toBe(17);
  });
});
