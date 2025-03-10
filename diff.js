/**
 * Compares two strings and returns an array of differences.
 * Each difference is an object containing the differing character and its index.
 *
 * @param {string} newStr - The new string to compare.
 * @param {string} orgStr - The original string to compare against.
 * @returns {Array<{content: string, index: number, type: string}>} - An array of differences.
 */
export function diff(newStr, orgStr) {
    let diffs = [];
  
    let pointer = 0;
    while (pointer < newStr.length && pointer < orgStr.length) {
      let chOne = newStr[pointer];
      let chTwo = orgStr[pointer];
  
      if (chOne !== chTwo) {
        diffs.push({
          content: chOne,
          index: pointer,
          type: 'modified',
        });
      }
  
      pointer++;
    }
  
    while (pointer < newStr.length) {
      diffs.push({
        content: newStr[pointer],
        index: pointer,
        type: 'added',
      });
      pointer++;
    }
  
    while (pointer < orgStr.length) {
      diffs.push({
        content: orgStr[pointer],
        index: pointer,
        type: 'removed',
      });
      pointer++;
    }
  
    return diffs;
  }
  