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
// export function fizzBuzz(stopNum){
//     let results = [];
//     for(let i = 1; i <= stopNum; i++){
//         if(i % 4 === 0 && i % 3 === 0){
//             results.push("FizzBuzz");
//         }
//         else if(i % 4 === 0){
//             results.push("Buzz")
//         }
//         else if(i % 3 === 0){
//             results.push("Fizz");
//         }
//         else{
//             results.push(i);
//         }
//     }
//     return results;
// }

export function fizzBuzz(stopNum) {
  let results = [];
  for (let num = 1; num <= stopNum; num++) {
    let entry = "";
    if (num % 3 === 0) entry += "Fizz";
    if (num % 4 === 0) entry += "Buzz";
    results.push(entry || num);
  }
  return results;
}
