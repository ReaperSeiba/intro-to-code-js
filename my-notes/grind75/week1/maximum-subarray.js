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
/**
 * @param {number[]} nums
 * @return {number}
 */

//For loop to iterate once through the array
//To find the largest sum within the array start from 0 and sequentially add each number and drop the result if negative, that way if most numbers are negative example [-1, -4, -5, 6, -6] we are left with 0+6 = 6
//Update largest sum anytime a sequence from 0 exceeds it

//First attempt didn't account for arrays with all negative numbers.
var maxSubArray = function (nums) {
  largestSum = -Infinity;
  tracker = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largestSum) {
      largestSum = nums[i];
    }

    tracker += nums[i];
    if (tracker < 0) {
      tracker = 0;
    }
    if (tracker > largestSum && tracker > 0) {
      largestSum = tracker;
    }
  }
  return largestSum;
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
