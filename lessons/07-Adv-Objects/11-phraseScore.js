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
 * The combo counter always starts at 1.
 * If the current letter is the same as the previous one, the combo increases by 1, and the current letter's value is multiplied by the combo before finally being added to the score.
 * The combo resets backs to 1 when the current letter is no longer the same as the previous one.
 *
 * @category 07 - Adv Objects
 * @function phraseScore
 * @param {string} inputPhrase - The phrase to score.
 * @param {boolean?} comboActive - Whether the combo multiplier is active.
 * @returns {number} - The calculated score of the phrase.
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

//second attempt trying combo active again because couldnt get a method storing previous char working either
export function phraseScore(inputPhrase, comboActive) {
  let score = 0;
  let combo = 1;
  for (const char of inputPhrase) {
    // if (char === previousChar) {
    //   comboActive = true;
    // } else {
    //   comboActive = false;
    // }
    console.log(comboActive);
    score += letterValues[char] * combo;
    if (comboActive) {
      combo++;
    } else {
      combo = 1;
    }
  }
  return score;
}
