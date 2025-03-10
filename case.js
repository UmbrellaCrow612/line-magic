/**
 * Converts a given string to camel case format, where the first word is in lowercase
 * and all subsequent words are capitalized, with spaces removed.
 * For example, "hello world" will become "helloWorld".
 *
 * @param {string} str - The input string to be converted to camel case.
 *                        It may contain spaces between words.
 * @returns {string} - The input string converted to camel case.
 *                     If the input is an empty string, the output will also be an empty string.
 *
 * @example
 * toCamelCase('hello world'); // returns 'helloWorld'
 * toCamelCase('My name is joe'); // returns 'myNameIsJoe'
 */
export function toCamelCase(str) {
  let pointer = 0;
  let result = "";
  let firstWordEncountered = false;

  while (pointer < str.length) {
    let ch = str[pointer];

    if (ch === " ") {
      pointer++;
      continue;
    } else {
      let word = getWord(str, pointer).toLowerCase();
      if (!firstWordEncountered) {
        result += word;
        firstWordEncountered = true;
      } else {
        let capWord = capFirstLetter(word);
        result += capWord;
      }
      pointer += word.length;
    }
  }

  return result;
}

/**
 * Checks if a given string follows camelCase naming convention.
 *
 * A string is considered camelCase if:
 * - It starts with a lowercase letter.
 * - It does not contain spaces or special characters.
 * - Any subsequent words start with an uppercase letter, followed by lowercase letters.
 *
 * @param {string} str - The string to check.
 * @returns {boolean} - Returns `true` if the string is in camelCase, otherwise `false`.
 */
export function isCamelCase(str) {
  if (str.length < 1) return false;
  let _str = str.trim();

  let hasSeenFirstNoneCapitalFirstLetterWord = false;
  for (let i = 0; i < _str.length; i++) {
    let ch = _str[i];

    if (!hasSeenFirstNoneCapitalFirstLetterWord) {
      if (isLower(ch)) {
        hasSeenFirstNoneCapitalFirstLetterWord = true;
        continue;
      } else {
        return false;
      }
    } else {
      if (isLower(ch)) {
        continue;
      } else {
        if (i + 1 < _str.length) {
          let isNextCharCaps = !isLower(_str[i + 1]);
          if (isNextCharCaps) {
            return false;
          }
        }
      }
    }
  }
  return true;
}

/**
 * Converts a space-separated string to snake_case.
 *
 * This function trims leading and trailing spaces, splits the string into words using whitespace as a delimiter,
 * converts all words to lowercase, and then joins them using an underscore.
 *
 * @param {string} str - The input string containing words separated by spaces.
 * @returns {string} The converted string in snake_case format.
 *
 * @example
 * toSnakeCase("Hello World"); // "hello_world"
 * toSnakeCase("  JavaScript is fun  "); // "javascript_is_fun"
 * toSnakeCase("singleWord"); // "singleword"
 */
export function toSnakeCase(str) {
  return str
    .trim()
    .split(/\s+/)
    .map((word) => word.toLowerCase())
    .join("_");
}

/**
 *
 * @param {string} str
 */
export function isSnakeCase(str) {
  let _str = str.trim();
  let first = false;
  for (let i = 0; i < _str.length; i++) {
    let ch = _str[i];

    if (!first) {
      if (ch !== "_") {
        first = true;
        continue;
      } else {
        return false;
      }
    }

    if (!isLower(ch)) {
      return false;
    }
  }
  return true;
}

export function toPascalCase() {}

export function isPascalCase() {}

export function toKebabCase() {}

export function isKebabCase() {}

export function isLowerCase() {}

/**
 * Get a word from a non-white-space character until the next white-space character.
 * It handles spaces, newlines, tabs, and carriage returns as white-space characters.
 *
 * @param {string} str - The input string to extract the word from.
 * @param {number} position - The starting position in the string to begin extracting the word from.
 * @returns {string} - The word found starting at the specified position, ending at the next white-space character or the end of the string.
 */
export function getWord(str, position) {
  let word = "";

  for (let i = position; i < str.length; i++) {
    let ch = str[i];
    if (ch === " " || ch === "\n" || ch === "\t" || ch === "\r") {
      return word;
    } else {
      word += ch;
    }
  }
  return word;
}

/**
 * Capitalizes the first letter of a string.
 * If the string is empty or contains only spaces, returns an empty string.
 *
 * @param {string} str - The string to capitalize.
 * @returns {string} The string with the first letter capitalized, or an empty string if input is empty or only spaces.
 */
export function capFirstLetter(str) {
  let ch = str.trim()[0];

  if (ch) {
    ch = ch.toUpperCase();
    return `${ch}${str.slice(1)}`;
  }

  return "";
}

/**
 * Helper function to see if a string is lowercase
 * @param {string} str
 */
export function isLower(str) {
  let trueLower = str.toLowerCase();
  return str === trueLower;
}
