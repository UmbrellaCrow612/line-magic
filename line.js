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
 * Wraps long lines in a string to a given maximum length, ensuring no line exceeds the specified character count.
 * If a line exceeds the given length, it inserts a newline character (`\n`) to break the line.
 *
 * @param {string} str The input string that needs to be wrapped.
 * @param {number} length The maximum length for each line.
 * @returns {string} The string with wrapped lines, ensuring no line exceeds the specified length.
 *
 * @example
 * // returns 'This is a\nwrapped text\nexample'
 * wrapText('This is a wrapped text example', 10);
 */
export function wrapText(str, length) {
  let result = "";
  let counter = 0;

  for (let i = 0; i < str.length; i++) {
    result += str[i];
    counter++;

    if (counter >= length) {
      result += "\n";
      counter = 0;
    }
  }

  return result;
}

/**
 * Extracts the first few lines from a given string.
 * The function splits the string by newline characters and returns the specified number of lines.
 * If the provided range exceeds the total number of lines in the string, it will return all lines.
 *
 * @param {string} str - The input string to extract lines from.
 * @param {number} range - The number of lines to extract from the start of the string.
 * @returns {string} A string containing the first `range` lines of the input string.
 *
 * @example
 * const text = "Line 1\nLine 2\nLine 3\nLine 4\n";
 * const result = extractLines(text, 2);
 * console.log(result); // Output: "Line 1\nLine 2"
 */
export function extractLines(str, range) {
  return str.split("\n").slice(0, range).join("\n");
}

/**
 * Extracts a range of lines from the given string based on the specified start and end line indices.
 *
 * @param {string} str - The input string with lines separated by newline characters.
 * @param {number} start - The starting index of the line range (inclusive).
 * @param {number} end - The ending index of the line range (inclusive).
 * @returns {string[]} An array containing the lines within the specified range.
 *
 * @example
 * const text = `Line 1\nLine 2\nLine 3\nLine 4\nLine 5`;
 * const result = extractLineRange(text, 1, 3);
 * console.log(result); // Output: ['Line 2', 'Line 3', 'Line 4']
 */
export function extractLineRange(str, start, end) {
  let _start = start < 0 ? 0 : start;
  let _end =
    end >= 0 && end < str.split("\n").length ? end + 1 : str.split("\n").length;

  const lines = str.split("\n");

  if (_end > lines.length) {
    _end = lines.length;
  }

  if (_start > _end) {
    return [];
  }

  return lines.slice(_start, _end);
}

/**
 * Replaces whitespace characters in a string with visible markers.
 *
 * - Spaces (`" "`) are replaced with `[␣]`
 * - Tabs (`"\t"`) are replaced with `[→]`
 * - Carriage returns (`"\r"`) are replaced with `[↵]`
 *
 * @param {string} str - The input string to process.
 * @returns {string} The string with visible representations of whitespace.
 */
export function visualizeWhitespace(str) {
  return str
    .replaceAll(" ", "[␣]") // Replace spaces
    .replaceAll("\t", "[→]") // Replace tabs
    .replaceAll("\r", "[↵]"); // Replace carriage returns
}

/**
 * Visualizes newlines in a string by replacing them with the string '[n]'.
 * This can be useful for debugging or visually inspecting the structure of the string.
 *
 * @param {string} str - The input string in which newlines will be visualized.
 * @returns {string} - A new string where all newlines are replaced by '[n]'.
 *
 * @example
 * const result = visualizeNewLine("Hello\nWorld");
 * console.log(result); // "Hello[n]World"
 */
export function visualizeNewLine(str) {
  return str.replaceAll("\n", "\n[n]");
}

/**
 * Replaces all tab characters in a string with a visual representation.
 *
 * @param {string} str - The input string containing tab characters.
 * @returns {string} The modified string with tabs replaced by "[t]".
 */
export function visualizeTab(str) {
  return str.replaceAll("\t", "[→]");
}

/**
 * Returns the index of the first newline character in a string.
 * If no newline is found, it returns the length of the string.
 *
 * @param {string} str - The string to search for the newline character.
 * @returns {number} - The index of the first newline, or the length of the string if no newline is found.
 */
export function getNewLineIndex(str) {
  const index = str.indexOf("\n");
  return index === -1 ? str.length : index;
}
