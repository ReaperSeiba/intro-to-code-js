import { uppers } from "./data/startingCapsOnly.data";

/**
 * Define the function `startingCapsOnly`.
 * `startingCapsOnly` accepts an array of Strings; the array is always .length >= 1
 * `startingCapsOnly` returns a new array made of any words that begin with a capital letter.
 *
 * You have been given an array, `uppers`, of all uppercase letters to use for this problem.
 *
 * Use `.filter`!
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 *
 * @category 05 - Callbacks
 * @function startingCapsOnly
 * @param {String[]} words
 * @returns {String[]}
 * @example
 * startingCapsOnly(["Microsoft", "Tokyo", "Charlie"]) // => ["Microsoft", "Tokyo", "Charlie"];
 * startingCapsOnly(["party", "car", "banana"]) // => [];
 * startingCapsOnly(["whOOps", "lION", "monkeY"]) // => [];
 * startingCapsOnly(["Microsoft", "party", "lION"]) // => ["Microsoft"]
 */

// function startingCapsOnly(words) {
//   let result = [];
//   words.forEach((element) => {
//     if (uppers.includes(element.at(0))) {
//       result.push(element);
//     }
//   });
//   return result;
// }
//1st try

// function startingCapsOnly(words) {
//   let result = words.filter((word) => uppers.includes(word.at(0)));
//   return result;
// }
//2nd try

const startingCapsOnly = (words) =>
  words.filter((word) => uppers.includes(word.charAt(0)));
export { startingCapsOnly };
