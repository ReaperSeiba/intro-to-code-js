/**
 * @see {@link replace_this_with_leetcode_link Week 1 - Problem Name Here}
 */

/**
 * REMINDER
 * open wsplit/stopwatch before starting
 * ONLY hit splits/lap while working
 * fill in times after problem session done
 */

/**
 * REACTO System
 * READ
 * - what are the high level problem objectives?
 * - what are the inputs and outputs?
 * - what are the constraints?
 * - what are the examples provided and what do they mean?
 */

// READ notes here

/**
 * EXPLAIN
 * - what are problem objectives?
 * - what did you learn from examples provided?
 * - what are possible edge cases?
 */

// EXPLAIN notes here

/**
 * APPROACH
 * - write solution structure in PSUEDOCODE
 * - basically simple english instructions to solve
 */

// APPROACH notes here

/**
 * CODE below
 */

// var twoSum = function(nums, target) {
//     function sumHelper(baseIndex){
//       for(let i = baseIndex + 1; i < nums.length; i++){
//         if(nums[baseIndex] + nums[i] === target){
//             return [baseIndex, i];
//         }
//       }
//       return sumHelper(baseIndex + 1);

//     }
//     return sumHelper(0);
// };

//One loop solution

// function twoSum(nums, target){
//     for(let i = 0; i < nums.length; i++){
//         for(let j = i + 1; j < nums.length; j++){
//            if(nums[i] + nums[j] === target){
//             return [i, j];
//            }
//         }
//     }
// }

// var twoSum = function (nums: number[], targetNum: number) {
//   // Store the relationship between currNum and index TOGETHER
//   let numMap = new Map<number, number>();

//   for (let i = 0; i < nums.length; i++) {
//     const currNum = nums[i];

//     // What is the number we need right now?
//     const complement = target - currNum;

//     // Does the map contain the complement of current num?
//     if (numMap.has(complement)) {
//       // Complement exists, grab its corresponding value
//       const complementIndex = numMap.get(complement);

//       // Use that value and format your return
//       return [complementIndex, i];
//     }

//     // Tell the Map, "you have the currNum at this index"
//     numMap.set(currNum, i);
//   }

//   // No solution found
//   return [];
// };

//not the efficient solution, also solvable with nested for loops

var twoSum = function (nums: number[], targetNum: number) {
  // Store the relationship between currNum and index TOGETHER
  let numMap = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i];

    // What is the number we need right now?
    const complement = targetNum - currNum;

    // Does the map contain the complement of current num?
    if (numMap.has(complement)) {
      // Complement exists, grab its corresponding value
      const complementIndex = numMap.get(complement);

      // Use that value and format your return
      return [complementIndex, i];
    }

    // Tell the Map, "you have the currNum at this index"
    numMap.set(currNum, i);
  }

  // No solution found
  return [];
};

/**
 * COMPLEXITY
 *
 * Copy your function implementation into ChatGPT and ask it for time and space complexity analysis. Be sure to ask questions if you don't understand terms/topics/etc.
 *
 * TIME   O(), where...
 * SPACE  O(), where...
 */

// COMPLEXITY notes here

/**
 * OPTIMIZE
 * Once you have a working answer, re-examine implementation
 * How can you optimize it?
 */

// OPTIMIZE notes here

/**
 * use wsplit or just a stopwatch app with a lap timer for this
 *
 *                  Total   Split
 *
 * READ             00:47
 * EXPLAIN          01:31   02:18
 * APPROACH         12:48   15:07
 * CODE [PASS]      12:27   27:36
 * TEST             06:01   33:37
 * OPTIMIZE         24:37   58:38
 */

// var twoSum = function(nums, target) {
//     function sumHelper(baseIndex){
//       for(let i = baseIndex + 1; i < nums.length; i++){
//         if(nums[baseIndex] + nums[i] === target){
//             return [baseIndex, i];
//         }
//       }
//       return sumHelper(baseIndex + 1);

//     }
//     return sumHelper(0);
// };

//One loop solution

// function twoSum(nums, target){
//     for(let i = 0; i < nums.length; i++){
//         for(let j = i + 1; j < nums.length; j++){
//            if(nums[i] + nums[j] === target){
//             return [i, j];
//            }
//         }
//     }
// }

// var twoSum = function (nums: number[], targetNum: number) {
//   // Store the relationship between currNum and index TOGETHER
//   let numMap = new Map<number, number>();

//   for (let i = 0; i < nums.length; i++) {
//     const currNum = nums[i];

//     // What is the number we need right now?
//     const complement = target - currNum;

//     // Does the map contain the complement of current num?
//     if (numMap.has(complement)) {
//       // Complement exists, grab its corresponding value
//       const complementIndex = numMap.get(complement);

//       // Use that value and format your return
//       return [complementIndex, i];
//     }

//     // Tell the Map, "you have the currNum at this index"
//     numMap.set(currNum, i);
//   }

//   // No solution found
//   return [];
// };

//not the efficient solution, also solvable with nested for loops

var twoSum = function (nums: number[], targetNum: number) {
  // Store the relationship between currNum and index TOGETHER
  let numMap = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i];

    // What is the number we need right now?
    const complement = targetNum - currNum;

    // Does the map contain the complement of current num?
    if (numMap.has(complement)) {
      // Complement exists, grab its corresponding value
      const complementIndex = numMap.get(complement);

      // Use that value and format your return
      return [complementIndex, i];
    }

    // Tell the Map, "you have the currNum at this index"
    numMap.set(currNum, i);
  }

  // No solution found
  return [];
};
