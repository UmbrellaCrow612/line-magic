import { capFirstLetter, getWord, toCamelCase } from "./case.js";
import {
  indent,
  isWhiteSpaceIndention,
  removeIndention,
  isTabSpaceIndention,
  detectIndentionStyle,
  normalizeIndentationToWhiteSpace,
  normalizeIndentationToTab,
} from "./indent.js";
import {
  addLineNumbers,
  extractLineRange,
  extractLines,
  getNewLineIndex,
  visualizeNewLine,
  visualizeTab,
  visualizeWhitespace,
  wrapText,
} from "./line.js";
import { padLeft, padRight } from "./pad.js";
import { ellipsize, trimBlankLines } from "./trim.js";

export {
  addLineNumbers,
  wrapText,
  indent,
  extractLines,
  extractLineRange,
  visualizeWhitespace,
  visualizeNewLine,
  removeIndention,
  trimBlankLines,
  ellipsize,
  isWhiteSpaceIndention,
  isTabSpaceIndention,
  detectIndentionStyle,
  visualizeTab,
  normalizeIndentationToWhiteSpace,
  padLeft,
  padRight,
  getNewLineIndex,
  capFirstLetter,
  getWord,
  normalizeIndentationToTab,
};
