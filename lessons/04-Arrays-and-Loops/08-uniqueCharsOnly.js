/**
 * #8: uniqueCharsOnly
 *
 * Define the function uniqueCharsOnly. Make sure to export it.
 * uniqueCharsOnly accepts a string and returns an array of strings.
 * This returned array of strings contains one of each unique character that appears within the input.
 *
 * CHALLENGE: uniqueCharsOnly can be written as a one-liner.
 *
 * @category 04 - Arrays and Loops
 * @function uniqueCharsOnly
 * @param {String} input - string made up of random characters with possible repeats
 * @returns {String[]}
 *
 * @example
 * uniqueCharsOnly("a") => ['a']
 * uniqueCharsOnly("aaa") => ['a']
 * uniqueCharsOnly("abc") => ['a', 'b', 'c']
 * uniqueCharsOnly("abcbabcbabcbabcba") => ['a', 'b', 'c']
 */
export function uniqueCharsOnly(str) {
  let charArr = [];
  for (let i = 0; i < str.length; i++) {
    if (!charArr.includes(str[i])) {
      charArr.push(str[i]);
    }
  }
  return charArr;
}

// export const uniqueCharsOnly = (str) => Array.from(new Set(input.split("")));
