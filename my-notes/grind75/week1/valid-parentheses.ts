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
//  * @param {string} s
//  * @return {boolean}
//  */

//  //thought process: assuming string is even, store character at index , compare next character if valid open bracket store and move on, if not valid character return false , if matching closing bracket remove from array, if loop completes and array is empty return true, if array is not empty return false

// var isValid = function(s) {
//     let testArray = [];
//     if (s.length % 2 === 1){
//         return false;
//     }
//     for(let index = 0; index < s.length; index++){
//         switch  (s[index]){
//             case "(":

//             testArray.push("(");
//             break;

//             case ")":

//                if(testArray[testArray.length -1] !== "("){
//                 return false;
//             }
//             else{
//                 testArray.pop();
//             }
//             break;

//             case "[":

//             testArray.push("[");
//             break;

//             case "]":

//                if(testArray[testArray.length -1] !== "["){
//                 return false;
//             }
//             else{
//                 testArray.pop();
//             }
//             break;

//             case "{":

//             testArray.push("{");
//             break;

//             case "}":

//             if(testArray[testArray.length -1] !== "{"){
//                 return false;
//             }
//             else{
//                 testArray.pop();
//             }
//             break;

//             default:
//             return false;

//         }

//     }
//     if(testArray.length === 0){
//         return true;
//     }
//     else{
//         return false;
//     }

// };

function isValid(s: string) {
  // Detail what the closing bracket requires to be valid
  const bracketPairs: Record<string, string> = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  // const base = "()"; valid
  // ( > isClosing? no, stack (
  // ) > isClosing? yes, take ( out from stack
  //    check, if match, continue

  // "([" invalid
  // ( > isClosing? no, stack (
  // [ > isClosing? no, stack ([

  // Helper to determine is current character is a CLOSING bracket
  const isClosingBracket = (char: string): boolean => char in bracketPairs;

  // Track what we've seen so far in a way that lets us remove completed pairs
  const stack: string[] = [];

  // Iterate over input string
  for (const char of s) {
    // Is this a closing bracket or an opening one?
    if (isClosingBracket(char)) {
      // If so, remove and store the last thing on the stack
      const opening = stack.pop();

      // Does the value of opening, correspond to the key of closing?
      if (bracketPairs[char] !== opening) {
        // If the values DO NOT align, its invalid.
        return false;
      }

      // Not false, go next char
    } else {
      // This is an opening character, let's wait to see if we get its closing char
      stack.push(char);
    }
  }

  // If the stack still has items, it is NOT valid.
  // Otherwise, it is.
  return stack.length === 0;
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
