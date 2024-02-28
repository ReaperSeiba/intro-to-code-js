/**
 * #7: Dog owners and their dogs
 *
 * Define the function dogAndOwnerInfo. Make sure to export it for testing use.
 * dogAndOwnerInfo takes in four inputs:
 * - the dog's name
 * - the dog's age
 * - the dog owner's name
 * - the dog owner's age
 *
 * dogAndOwnerInfo converts the dog's age to human years by multiplying it by 7.
 *
 * @category 03 - Methods and Functions
 * @function dogAndOwnerInfo
 * @param {String} dogName
 * @param {Number} dogAge
 * @param {String} ownerName
 * @param {Number} ownerAge
 * @returns {String}
 *
 * @example
 * dogAndOwnerInfo("Turbo", 10, "Richard", 55) =>
 *    "Turbo is older than their owner, Richard, by 15 years."
 * dogAndOwnerInfo("Fido", 1, "Sara", 15) =>
 *    "Sara is older than their dog, Fido, by 8 years."
 * dogAndOwnerInfo("Star", 2, "John", 14) =>
 *    "John and Star are the both 14 years old."
 */

// Eve version
// export function dogAndOwnerInfo(dogName, dogAge, ownerName, ownerAge) {
//   if (dogAge * 7 > ownerAge) {
//     return `${dogName} is older than their owner, ${ownerName}, by ${
//       dogAge * 7 - ownerAge
//     } years.`;
//   } else if (dogAge * 7 < ownerAge) {
//     return `${ownerName} is older than their dog, ${dogName}, by ${
//       ownerAge - dogAge * 7
//     } years.`;
//   } else if (dogAge * 7 == ownerAge) {
//     return `${ownerName} and ${dogName} are both ${ownerAge} years old.`;
//   }
//   return "Not a valid input";
// }

export function dogAndOwnerInfo(dogName, dogAge, ownerName, ownerAge) {
  // Handle age conversion first
  const dogAgeInHumanYears = dogAge * 7;

  if (dogAgeInHumanYears > ownerAge) {
    return `${dogName} is older than their owner, ${ownerName}, by ${
      dogAgeInHumanYears - ownerAge
    } years.`;
  } else if (dogAgeInHumanYears < ownerAge) {
    return `${ownerName} is older than their dog, ${dogName}, by ${
      ownerAge - dogAgeInHumanYears
    } years.`;
  } else {
    return `${ownerName} and ${dogName} are both ${ownerAge} years old.`;
  }
}
