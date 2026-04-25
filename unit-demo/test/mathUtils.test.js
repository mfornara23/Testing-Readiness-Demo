import test from "node:test";
import assert from "node:assert/strict";
import { isEven, multiply, normalizeText, sum } from "../src/mathUtils.js";

test("sum adds two positive numbers", () => {
  assert.equal(sum(2, 3), 5);
});

test("sum supports negative numbers", () => {
  assert.equal(sum(-2, 5), 3);
});

test("multiply multiplies two numbers", () => {
  assert.equal(multiply(4, 6), 24);
});

test("isEven returns true for even numbers", () => {
  assert.equal(isEven(10), true);
});

test("normalizeText trims and lowercases text", () => {
  assert.equal(normalizeText("  HeLLo  "), "hello");
});
