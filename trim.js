/**
 * Remove all blank lines from a string (lines with no text or only whitespace).
 * Blank lines are identified by one or more newlines with only optional whitespace characters in between.
 *
 * @param {string} str - The input string from which blank lines will be removed.
 * @returns {string} - A new string with blank lines removed.
 *
 * @example
 * const result = trimBlankLines("This is a test.\n\n  \nSecond line.");
 * console.log(result); // "This is a test.\nSecond line."
 */
export function trimBlankLines(str) {
  let regex = /\n\s*\n/gm;

  return str.replaceAll(regex, "");
}
