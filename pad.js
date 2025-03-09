/**
 * Pads a string with a specified character or spaces on the left side until the desired length is reached.
 *
 * @param {string} str - The string to pad.
 * @param {string} [pad=" "] - The character to pad with (default is a space).
 * @param {number} [count=1] - The number of padding characters to add (default is 1).
 * @returns {string} - The padded string.
 */
export function padLeft(str, pad = " ", count = 1) {
  return pad.repeat(count) + str;
}

/**
 * Pads a string with a specified character or empty spaces on the right side until the desired length is reached.
 *
 * @param {string} str - The string to pad.
 * @param {string} [pad=" "] - The character to pad with (default is a space).
 * @param {number} [count=1] - The number of padding characters to add (default is 1).
 * @returns {string} - The padded string.
 */
export function padRight(str, pad = " ", count = 1) {
  return str + pad.repeat(count);
}
