/**
 * #5: disemvoweler
 *
 * Define the function disemvoweler. Make sure to export it.
 * disemvoweler takes in a string and returns it stripped of its vowels.
 *
 * BONUS: disemvoweler also removes any capitalized vowels.
 * CHALLENGE: disemvoweler can be written as a one-liner!
 *
 * @category 04 - Arrays and Loops
 * @function disemvoweler
 * @param {String} string - never empty string
 * @returns {String} the input string with all its vowels removed
 * @example
 * disemvoweler("b") => "b"
 * disemvoweler("xyz") => "xyz"
 * disemvoweler("a") => ""
 * disemvoweler("cr") => "cr"
 * disemvoweler("dictionary") => "dctnry"
 * disemvoweler("aaeeiioouu") => ""
 *
 * // BONUS
 * disemvoweler("BeaR") => "BR"
 * disemvoweler("diCTIONAry") => "dCTNry"
 */

// HINT
// What do you need to do when you encounter a vowel in your str?

const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
export function disemvoweler(str) {
  let vowelessStr = "";
  for (let i = 0; i < str.length; i++) {
    let currChar = str[i];
    if (!vowels.includes(currChar)) {
      vowelessStr += currChar;
    }
  }
  return vowelessStr;
}

// Christian's version
// export function disemvoweler(string) {
//   const vowels = ["a", "e", "i", "o", "u"];
//   let baseStr = "";

//   for (let i = 0; i < string.length; i++) {
//     // Grab curr char and vowel
//     const currChar = string[i];

//     // If the lowercase version of currChar isn't a vowel, add it to baseStr
//     if (!vowels.includes(currChar.toLowerCase())) {
//       baseStr += currChar;
//     }
//   }
//   return baseStr;
// }

//export const disemvowler = (str) => str.conc

// OLD
// export function disemvoweler(str) {
//   for (let i = 0; i < str.length; i++) {
//     let currChar = str[i];

//     if (!vowels.includes(currChar)) {
//       str += currChar;
//     }
//   }
//   return str;
// }
