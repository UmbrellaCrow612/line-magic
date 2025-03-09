/**
 * Contains indentation related helper functions todo with lines
 */

/**
 * Convert between spaces and tabs while maintaining structure.
 */
function convertSpaceToTabs() {}

/**
 * Identify whether a string uses spaces or tabs for indentation or both.
 */
function detectIndentionStyle() {}

/**
 * Ensure consistent indentation throughout a multiline string.
 */
function normalizeIndentation() {}

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
