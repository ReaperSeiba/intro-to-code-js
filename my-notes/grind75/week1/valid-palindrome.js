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
 * @param {string} s
 * @return {boolean}
 */

//First attempt, very slow
//uses regex and filter https://stackoverflow.com/questions/3617797/regex-to-match-only-letters

// var isPalindrome = function(s) {
//     lowerStr = s.toLowerCase();
//     strArr = [...lowerStr]
//     const condensedString = strArr.filter((char) => /[a-z0-9]/.test(char) ? char : "" );
//     console.log(condensedString);

//  if(condensedString.length === 0){
//     return true;
//  }
//     for(let i = 0; i < condensedString.length; i++){
//         if(condensedString.length - 1 - i <= i ){
//             return true;
//         }
//         if(condensedString[i] !== condensedString[condensedString.length - 1 - i]){
//             return false;
//         }
//     }
// };

//More efficient attempt || helper functions, less use of built in functions
//idea Condense String Helper
// Check Palindrome Helper

//Result slightly better!!

function isPalindrome(s) {
  let stringToTest = condenseStr(s);
  return palindromeChecker(stringToTest);

  function condenseStr(str) {
    let validChar = "abcdefghijklmnopqrstuvwxyz0123456789";
    let condensedStr = "";

    for (let i = 0; i < str.length; i++) {
      currentChar = str[i].toLowerCase();
      if (validChar.includes(currentChar)) {
        condensedStr += currentChar;
      }
    }
    return condensedStr;
  }

  function palindromeChecker(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
      if (str[left] !== str[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }
}

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
