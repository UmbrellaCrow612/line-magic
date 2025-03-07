/**
 * Contains helper functions not categorized or are really specific
 */

/**
 * Adds line numbers to each line of the given string.
 * Optionally, a custom separator can be provided. By default, ":" is used.
 *
 * @param {string} str - The input string where line numbers will be added.
 * @param {string} [separator=":"] - The separator to use between the line number and text. Defaults to ":".
 * @throws {TypeError} If `str` is not a string or `separator` is not a string.
 * @returns {string} A new string with each line prefixed by its corresponding line number and the specified separator.
 *
 * @example
 * const input = "Hello\nWorld";
 * console.log(addLineNumbers(input));
 * // "1: Hello\n2: World"
 *
 * console.log(addLineNumbers(input, " -> "));
 * // "1 -> Hello\n2 -> World"
 *
 * @example
 * // Handling empty input
 * console.log(addLineNumbers(""));
 * // ""
 *
 * @example
 * // Custom separator with spaces
 * console.log(addLineNumbers("One\nTwo\nThree", " | "));
 * // "1 | One\n2 | Two\n3 | Three"
 *
 * @note This function preserves existing line breaks and does not modify the original input string.
 */
export function addLineNumbers(str, separator = ":") {
  if (typeof str !== "string" || typeof separator !== "string") {
    throw new TypeError("Both `str` and `separator` must be strings.");
  }

  if (!str) return ""; // Proper empty string check

  return str
    .split("\n")
    .map((line, index) => `${index + 1}${separator} ${line}`)
    .join("\n");
}

/**
 * Automatically wrap long lines in a string to a given maximum length, ensuring no line exceeds a specified character count.
 */
function wrapText() {}

/**
 * Find and replace text across multiple lines, not just within a single line
 */
function findReplaceAcrossLines() {}

/**
 * Count the number of words in each line of a multi-line string
 */
function countWordsPerLine() {}

/**
 * Sort lines based on a custom sorting function or by predefined criteria (alphabetically, by word count, etc.)
 */
function sortLines() {}

/**
 * Extract a specific range of lines (e.g., lines 3 to 5).
 */
function extractLineRange() {}
