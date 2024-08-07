/**
 * #9: wordCalculator
 *
 * Define the function wordCalculator. Make sure to export it.
 * wordCalculator accepts an array of numbers and an array of strings, each three-letter string representing a math operation.
 * wordCalculator should only perform these math operations:
 * - "add": addition
 * - "sub": subtraction
 * - "mul": multiplication
 * - "div": division
 * - "rem": remainder
 * - "exp": exponentiation
 *
 * wordCalculator ignores the rules of PEMDAS/BEDMAS and handles operations as passed into the operations array from left to right, one at a time.
 * wordCalculator returns the total of all the values and operations passed into it.
 *
 * @category 04 - Arrays and Loops
 * @function wordCalculator
 * @param {Number[]} nums - array of numbers; nums.length always >= 1
 * @param {String[] | []} operations - array of strings
 * @return {Number} resulting value after all operations have been computed
 *
 * @example
 * wordCalculator([1], ["lol"]) => 0   // bad operation, return 0
 * wordCalculator([1], ["add"]) => 1    // 0 + 1 = 1
 * wordCalculator([2], ["sub"]) => 2    // 0 - 2 = -2
 * wordCalculator([3], ["mult"]) => 0    // 0 * 3 = 0
 *
 * wordCalculator([5, 6], ["add", "pow"]) => 30
 *  // 0 + 5 = 5 ** 6 = 15625
 * wordCalculator([7, 11, 12], ["sub", "mult", "rem"]) => -5
 *  // 0 - 7 = 7 * 11 = -77 % 12 = -5
 */
export function wordCalculator(nums, operations) {
  let validOperations = ["add", "sub", "mult", "div", "rem", "pow"];
  let result = 0;
  for (let i = 0; i < operations.length; i++) {
    if (!validOperations.includes(operations[i])) {
      console.log(`${operations[i]} IS INVALID!!!!`); //directions had wrong names for mult and pow
      return 0;
    }
    result = determineResult(result, nums[i], operations[i]);
  }
  return result;
}

function determineResult(result, num, operation) {
  switch (operation) {
    case "add":
      return result + num;
    case "sub":
      return result - num;
    case "mult":
      return result * num;
    case "div":
      return result / num;
    case "rem":
      return result % num;
    case "pow":
      return result ** num;
  }
}

/**
 * Christian's version
 */
// Both input arrays are the same size
// Use the i pointer from the loop to grab current entry per iteration
// export function wordCalculator(nums, operations) {
//   let result = 0;

//   for (let i = 0; i < nums.length; i++) {
//     const currNum = nums[i];
//     const currOp = operations[i];
//     switch (currOp) {
//       case "add":
//         result += currNum;
//         break;
//       case "sub":
//         result -= currNum;
//         break;
//       case "mult":
//         result *= currNum;
//         break;
//       case "div":
//         result /= currNum;
//         break;
//       case "rem":
//         result %= currNum;
//         break;
//       case "pow":
//         result **= currNum;
//         break;
//       default:
//         break;
//     }
//     // go to next loop
//   }
//   return result;
// }
