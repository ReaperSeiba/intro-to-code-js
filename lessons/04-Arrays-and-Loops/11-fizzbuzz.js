/**
 * #11: fizzBuzz
 *
 * Define the function fizzBuzz. Make sure to export it.
 * fizzBuzz accepts a number parameter, stop.
 * fizzBuzz returns an array where every number from 1 to stop is added as a string.
 * If the current number is divisible by 3, add "Fizz" to the array instead of the number.
 * If the current number is divisible by 4, add "Buzz" to the array instead of the number.
 * If the current number is divisible by both 3 and 4, add "FizzBuzz" to the array.
 *
 * @category 04 - Arrays and Loops
 * @function fizzBuzz
 * @param {Number} stopNum - the number to stop the loop at (inclusive)
 * @returns {String | Number[]} an array of strings and numbers
 * @example
 * fizzBuzz(12) => [1, 2, "Fizz", "Buzz", 5, "Fizz", 7, "Buzz", "Fizz", 10, 11, "FizzBuzz"]
 */

/**
 * if num is div by 5, then add "Rizz"
 */

// export function fizzBuzz(stop) {
//   let arr = [];
//   for (let i = 1; i <= stop; i++) {
//     if (i % 3 === 0 && i % 4 === 0) {
//       arr.push("FizzBuzz");
//     } else if (i % 3 === 0) {
//       arr.push("Fizz");
//     } else if (i % 4 === 0) {
//       arr.push("Buzz");
//     } else {
//       arr.push(i);
//     }
//   }
//   return arr;
// }

export function fizzBuzz(stopNum) {
  let result = [];

  for (let i = 1; i <= stopNum; i++) {
    let entry = "";
    if (i % 3 === 0) entry += "Fizz";
    if (i % 4 === 0) entry += "Buzz";
    result.push(entry || i);
  }
  return result;
}
