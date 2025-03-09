/**
 * Contains indentation related helper functions todo with lines
 */

/**
 * Detects the indentation style used in a given string.
 *
 * @param {string} str - The input string to analyze.
 * @returns {"white-space" | "tab" | "unknown"} - The detected indentation style:
 *   - `"white-space"` if spaces are used for indentation.
 *   - `"tab"` if tabs are used for indentation.
 *   - `"unknown"` if neither or mixed indentation is detected.
 */
export function detectIndentionStyle(str) {
  switch (true) {
    case isWhiteSpaceIndention(str):
      return "white-space";

    case isTabSpaceIndention(str):
      return "tab";

    default:
      return "unknown";
  }
}

/**
 * Checks if a string uses only space characters (not tabs) for indentation.
 * This function examines characters from the beginning of the string until
 * the first non-whitespace character is encountered.
 *
 * @param {string} str - The string to check for indentation style
 * @returns {boolean} - Returns true if indentation uses only spaces or if the string
 *                      is empty. Returns false if any tab character is found before
 *                      the first non-whitespace character.
 *
 * @example
 * // Returns true (only spaces used for indentation)
 * isWhiteSpaceIndention("    hello");
 *
 * @example
 * // Returns false (contains a tab in the indentation)
 * isWhiteSpaceIndention("  \thello");
 *
 * @example
 * // Returns true (empty string)
 * isWhiteSpaceIndention("");
 */
export function isWhiteSpaceIndention(str) {
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    switch (ch) {
      case " ":
        break;

      case "\t":
        return false;

      default:
        return true;
    }
  }
  return true;
}

/**
 * Checks if the given string starts with tab-based indentation.
 * It iterates through the string until the first non-tab or whitespace character
 * and determines whether the indentation consists of only tab characters.
 *
 * @param {string} str - The input string to check.
 * @returns {boolean} - Returns `true` if the indentation is tab-based or if the string is empty.
 *                      Returns `false` if it contains spaces before any other character.
 */
export function isTabSpaceIndention(str) {
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    switch (ch) {
      case " ":
        return false;

      case "\t":
        break;

      default:
        return true;
    }
  }
  return true;
}

/**
 * Ensure consistent indentation for a string it picks up what is being used the most
 * tab or white-space and then convert the res to it
 * @param {string} str
 */
function normalizeIndentation(str) {
  let tabCount = 0;
  let whiteSpaceCount = 0;
  outerLoop: for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case " ":
        whiteSpaceCount++;
        break;

      case "\t":
        tabCount++;
        break;

      default:
        break outerLoop;
    }

    // todo use functions
    // if (tabCount > whiteSpaceCount) {
    // }
  }
}

/**
 * Converts leading whitespace characters (spaces and tabs) in a string
 * to a consistent white space indentation until the first non-whitespace character.
 *
 * @param {string} str - The input string to normalize indentation for.
 * @returns {string} - The string with normalized indentation.
 */
export function normalizeIndentationToWhiteSpace(str) {
  let result = "";
  let pointer = 0;
  let whiteSpace = "    ";

  while (pointer < str.length) {
    switch (str[pointer]) {
      case " ":
        pointer++;
        result += whiteSpace;
        break;

      case "\t":
        pointer++;
        result += whiteSpace;
        break;

      default:
        result += str.slice(pointer);
        pointer = str.length + 1;
        break;
    }
  }
  return result;
}

/**
 * Adds indentation to a string by a specified amount, using either spaces or tabs.
 *
 * @param {string} str - The string to which indentation will be added.
 * @param {number} count - The number of spaces or tabs to add for indentation. Must be a positive integer.
 * @param {IndentOptions} options - Optional settings for indentation.
 *
 * @returns {string} - The indented string.
 *
 * @throws {Error} - Throws an error if `count` is not a positive integer.
 */
export function indent(str, count, options = { useTabs: false }) {
  if (count < 0 || !Number.isInteger(count)) {
    throw new Error("The count must be a positive integer.");
  }

  let space = " ";
  let tab = "\t";
  let result = str;

  for (let i = 0; i < count; i++) {
    if (options.useTabs) {
      result = `${tab}${result}`;
    } else {
      result = `${space}${result}`;
    }
  }
  return result;
}

/**
 * Removes leading indentation characters (spaces, tabs, and carriage returns) from a string.
 *
 * @param {string} str - The input string to process.
 * @param {number|null} [count=null] - The number of leading indentation characters to remove.
 *                                      If null or not provided, all leading indentation characters are removed.
 * @returns {string} - The modified string with indentation removed.
 */
export function removeIndention(str, count = null) {
  if (typeof str !== "string" || str.length === 0) return str;

  if (typeof count === "number" && count > 0) {
    let _str = str;
    let removed = 0;

    while (removed < count && _str.length > 0) {
      if (_str[0] === " " || _str[0] === "\t" || _str[0] === "\r") {
        _str = _str.slice(1);
        removed++;
      } else {
        break;
      }
    }
    return _str;
  }

  return str.replace(/^[\s\t\r]+/, "");
}

/**
 * Increase or decrease indentation for all lines
 */
function indentLines() {}

/**
 * Remove leading spaces or tabs from each line.
 */
function trimLeadingIndentation() {}

/**
 * Adjust all lines to match the indentation of the first non-empty line.
 */
function alignIndentation() {}

/**
 * Return the number of leading spaces/tabs on a given line.
 */
function getIndentLevel() {}
