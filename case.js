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

export function isCamelCase() {}

export function toSnakeCase() {}

export function isSnakeCase() {}

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
