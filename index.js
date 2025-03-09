import {
  indent,
  isWhiteSpaceIndention,
  removeIndention,
  isTabSpaceIndention,
  detectIndentionStyle,
  normalizeIndentationToWhiteSpace,
} from "./indent.js";
import {
  addLineNumbers,
  extractLineRange,
  extractLines,
  visualizeNewLine,
  visualizeTab,
  visualizeWhitespace,
  wrapText,
} from "./line.js";
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
  normalizeIndentationToWhiteSpace
};
