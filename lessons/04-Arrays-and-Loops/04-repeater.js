/**
 * #4: repeater
 *
 * Define the function repeater. Make sure to export it.
 * repeater accepts a string and a number.
 * repeater returns a string that is the input string repeated `times` number of times.
 *
 * If `times` is a negative value, return an empty string.
 *
 * CHALLENGE: repeater can be rewritten as a one-liner!
 *
 * @category 04 - Arrays and Loops
 * @function repeater
 * @param {String} str - the input string
 * @param {Number} times - amount to repeat input string
 * @returns {String} the input string repeated `times` number
 *
 * @example
 * repeater("empty string", 0) => ""
 * repeater("one time only", 1) => "one time only"
 * repeater("Hello", 2) => "HelloHello"
 * repeater("abc123", 3) => "abc123abc123abc123"
 */

// export function repeater(str, times) {
//   let newStr = "";
//   for (let i = 0; i < times; i++) {
//     newStr += str;
//   }
//   return newStr;
// }

export const repeater = (str, times) => (times > 0 ? str.repeat(times) : "");