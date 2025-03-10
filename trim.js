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

/**
 * Truncates a string and adds ellipses ("...") if its length exceeds the specified length.
 *
 * @param {string} str - The string to truncate.
 * @param {number} length - The length threshold. If the string exceeds this length, ellipses will be added.
 * @returns {string} - The truncated string with ellipses if it exceeded the specified length, otherwise the original string.
 */
export function ellipsize(str, length) {
  if (str.length > length) {
    let sub = str.substring(0, length);
    sub += "...";
    return sub;
  }
  return str;
}

/**
 * Returns the first sentence of a string, up to the first period.
 * If no period is found, returns the entire string.
 *
 * @param {string} str - The input string to process
 * @returns {string} The substring from the beginning to the first period (exclusive)
 */
export function trimToSentence(str) {
  let breakIndex = str.indexOf(".");
  if (breakIndex === -1) {
    breakIndex = str.length;
  }
  return str.substring(0, breakIndex);
}

/**
 * Removes whitespace from the front and back of a string and ensures there's only
 * a single space between words.
 *
 * @param {string} str - The input string to normalize
 * @returns {string} A normalized string with excess whitespace removed
 */
export function trimAndNormalize(str) {
  return str
    .split(" ")
    .filter((x) => x.trim() !== "")
    .join(" ");
}
