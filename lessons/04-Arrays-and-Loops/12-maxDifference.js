/**
 * #12: maxDifference
 *
 * Define the function maxDifference. Make sure to export it.
 * maxDifference accepts a single input, an array of numbers.
 * maxDifference returns the difference between the greatest and smallest numbers in the array.
 *
 * CHALLENGE: maxDifference can be written as a one-liner!
 *
 * @category 04 - Arrays and Loops
 * @function maxDifference
 * @param {Number[]} nums
 * @returns {Number}
 *
 * @example
 * maxDifference([1]) // => 1 - 1 = 0
 * maxDifference([5, 10]) // => 10 - 5 = 5
 * maxDifference([7, 5, 2, 4, 1, 3]) // => 7 - 1 = 6
 */
// export const maxDifference = (nums) =>
//   nums.sort((a, b) => {
//     return a - b;
//   })[nums.length - 1] -
//   nums.sort((a, b) => {
//     return a - b;
//   })[0];

// Function with a loop
// export function maxDifference(nums) {
//   let smallNum = nums[0];
//   let largeNum = nums[0];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > largeNum) {
//       largeNum = nums[i];
//     }
//     if (nums[i] < smallNum) {
//       smallNum = nums[i];
//     }
//   }
//   return largeNum - smallNum;
// }

/**
 * Christian's for-loop
 */
// export function maxDifference(nums) {
//   let min = nums[0];
//   let max = nums[0];

//   for (let i = 1; i < nums.length; i++) {
//     const currNum = nums[i];
//     min = Math.min(min, currNum);
//     max = Math.max(max, currNum);
//   }

//   return max - min;
// }

export const maxDifference = (nums) => Math.max(...nums) - Math.min(...nums);
