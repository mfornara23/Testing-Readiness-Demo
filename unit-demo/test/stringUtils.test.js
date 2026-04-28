import test from "node:test";
import assert from "node:assert/strict";
import { capitalize, reverseString } from "../src/stringUtils.js";

test("reverseString reverses a string", () => {
  assert.equal(reverseString("hello"), "olleh");
});

test("capitalize uppercases the first letter", () => {
  assert.equal(capitalize("hello"), "Hello");
});
