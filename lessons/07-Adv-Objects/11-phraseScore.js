import { letterValues } from "./data/11-phraseScore.data";

/**
 * #11: phraseScore
 *
 * `phraseScore` calculates the score of a given phrase based on the values assigned to each letter of the alphabet. letterValues has already been created and imported above for your use.
 *
 * BONUS:
 * `phraseScore` optionally accepts a second parameter, `comboActive`.
 * When `comboActive` is true, combo rules are in effect.
 *
 * Combo rules:
 * - The combo starts at 1 and increases by 1 each time consecutive letters are the same.
 * - For repeated letters, the letter's value is multiplied by the combo count.
 * - When the letter changes, the combo resets to 1.
 * - The final raw score is multiplied by the length of the phrase.
 *
 * @category 07 - Adv Objects
 * @function phraseScore
 * @param {string} inputPhrase - The phrase to score.
 * @param {boolean?} comboActive - Whether the combo multiplier is active.
 * @returns {number} - The calculated score of the phrase.
 *
 * @example
 * const nonCombophrase = "abc";
 * const nonComboScore = phraseScore(phrase);
 * // score: 6  (a = 1, b = 2, c = 3 -> 1 + 2 + 3 = 6)
 *
 * const comboPhrase = "aabbcc";
 * const comboScore = phraseScore(comboPhrase, true);
 * // comboScore: 72
 * // Step-by-step:
 * // - 'aa' -> 1 + (1 * 2) = 3,
 * // - 'bb' -> 2 + (2 * 2) = 6,
 * // - 'cc' -> 3 + (3 * 2) = 9.
 * // Total raw score = 3 + 6 + 9 = 18.
 * // Multiply by length (6): 18 * 6 = 72.
 */
//need to return a number (score)
//inputPhrase is a string where each letter needs to be compared to to letterValues and object containing keys for every letter
//iterate through inputPhrase using for of loop and += the value into 'score'
//return score

//bonus check previous char for match, if match activate combo, update previous char, update score
//return score

//first attempt no bonus
// export function phraseScore(inputPhrase) {
//   let score = 0;
//   let comboCounter = 1;
//   for (const char of inputPhrase) {
//     score += letterValues[char] * comboCounter;
//   }
//   return score;
// }

//first attempt at bonus/ couldnt get combo active to do anything??
// }
// export function phraseScore(inputPhrase) {
//   let score = 0;
//   let comboCounter = 1;
//   let previousChar = "";
//   for (const char of inputPhrase) {
//     if (char === previousChar) {
//       comboCounter++;
//     } else {
//       comboCounter = 1;
//     }
//     score += letterValues[char] * comboCounter;
//     previousChar = char;
//   }
//   return score;
// }

export function phraseScore(inputPhrase, comboActive) {
  let score = 0;
  let combo = 1;
  let previousChar = "";
  for (const char of inputPhrase) {
    if (comboActive && previousChar === char) {
      combo++;
    } else {
      combo = 1;
    }
    score += letterValues[char] * combo;
    previousChar = char;
  }

  return score * inputPhrase.length;
}

//Rewrite attempt
