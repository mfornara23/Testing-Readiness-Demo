export function reverseString(text) {
  // BUG: returns the original string instead of the reversed one
  return text;
}

export function capitalize(text) {
  // BUG: lowercases the first character instead of capitalizing it
  return text.charAt(0).toLowerCase() + text.slice(1);
}
