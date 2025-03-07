/**
 * Contains indentation related helper functions todo with lines
 */

/**
 * Convert between spaces and tabs while maintaining structure.
 */
function convertSpaceToTabs() {}

/**
 * Identify whether a string uses spaces or tabs for indentation.
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

function removeIndention() {}

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
