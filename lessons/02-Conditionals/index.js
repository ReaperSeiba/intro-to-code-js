/**
 * #1: Logically speaking
 *
 * Using the four given variables below, define four new variables and assign their values as follows:
 *
 * AND (&&)
 * a) Define andTrue. Use two of the givens and the && operator so that the evaluated value is true. Make sure to export it.
 * b) Define andFalse. Use two of the givens and the && operator so that the evaluated value is false. Make sure to export it.
 *
 * OR (||)
 * c) Define orTrue. Use two of the givens and the || operator so that the evaluated value is true. Make sure to export it.
 * d) Define orFalse. Use two of the givens and the || operator so that the evaluated value is true. Make sure to export it.
 *
 * See:
 * AND: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND
 * OR: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR
 */

const givenOne = 64 < 2; // false
const givenTwo = "cheese" === "cheese"; // true
const givenThree = 15 / 3 === 5; // true
const givenFour = 12 > 13; // false

export let andTrue = givenTwo && givenThree;
export let andFalse = givenOne && givenFour;

export let orTrue = givenTwo || givenFour;
export let orFalse = givenOne || givenFour;
/**
 * #2: fiveCharacters
 *
 * Define the variable notFiveChars. Make sure to export it.
 * Assign it a string that's not 5 characters long.
 *
 * Define the variable isItFiveChars. Make sure to export it.
 * Assign it a ternary that checks to see if notFiveChars has length 5.
 * - True output: "it's 5 characters"
 * - False output: "not 5 characters"
 *
 * See:
 * String length: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
 * Ternary: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 */

export let notFiveChars = "Chicken";
export let isItFiveChars = notFiveChars.length === 5 ? "it's 5 characters" : "not 5 characters";

/**
 * #3: numberOrString
 *
 * numberOrString is a function that accepts one input, a value of any type.
 * numberOrString returns the following based on these conditions:
 *
 * - "This is a string" if the value is a string
 * - "This is a number" if the value is a number
 * - "This is not a string nor a number" if it's neither
 *
 * SEE:
 * - return statement: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return
 *
 * @category 02 - Conditionals
 * @function numberOrString
 * @param {unknown} value
 * @returns {string}
 */

// function numberOrString(value) {
//  if(typeof(value)=== "string" || "number"){
//   return `This is a ${typeof(value)}`;
//  }
//  else{
//   return "This is not a string nor a number";
//  }
//}

const numberOrString = (value) => typeof value === "string" || typeof value === "number" ?  `This is a ${typeof value}` : "This is not a string or a number";


/**
 * #4: truthyFalsy
 *
 * truthyFalsy is a function that accepts one input, a value of any type.
 * Complete the function truthyFalsy given below by writing conditional statements in the function block that fulfill the following.
 *
 * - value is any of the following: 0, "", null, undefined, false
 *    -> return false
 * - value is anything else:
 *    -> return true
 *
 * You do not need to call the function with these values; the function will be automatically tested with them.
 *
 * Challenge:
 * There's a way to write this function using just one short if-statement expression.
 * Can you use the logical NOT (!) operator to make this function work?
 * See the link below for more on the logical NOT (!).
 *
 * See:
 * Logical NOT (!): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT
 * Falsy: https://developer.mozilla.org/en-US/docs/Glossary/Falsy
 * Truthy: https://developer.mozilla.org/en-US/docs/Glossary/Truthy
 *
 * @category 02 - Conditionals
 * @function truthyFalsy
 * @param {unknown} value
 * @returns {boolean}
 */

function truthyFalsy(value) {
  return !!value; //return the inverse of the inverse of truthy or falsy !falsy evaluates to true !!falsy evaluates to false
}

/**
 * #5: letsGoParty
 *
 * letsGoParty is a function that accepts three inputs: legalAge, outfitType, hasCoverCharge.
 * letsGoParty reads these three inputs and tests them to see if a person should be allowed in to party.
 * letsGoParty should return "Go home, no partying for you tonight." if any of these conditions are not met:
 *
 * - if a person's legalAge doesn't meet the party minimum of 25
 * - if a person's outfitType isn't "pool party"
 * - if a person's doesn't have the money to pay the coverCharge (false)
 *
 * If a person meets all three conditions, welcome them in: "Let's go party!"
 *
 * @category 02 - Conditionals
 * @function letsGoParty
 * @param {number} legalAge
 * @param {string} outfitType
 * @param {boolean} hasCoverCharge
 * @returns {string}
 */

function letsGoParty(legalAge, outfitType, hasCoverCharge) {
  if (legalAge < 25 || outfitType !== "pool party" || hasCoverCharge === false){
    return "Go home, no partying for you tonight."
  }
  else{
    return "Let's go party!"
  }
}

/**
 * #6: testGrader
 *
 * testGrader is a function that accepts one input: a grade that is between 0 and 100. testGrader returns a letter grade based of the range the input grade falls into.
 * Complete the function testGrader given below by writing condtional statements that fulfill the following.
 *
 * - grade is 90 to 100
 *    -> return 'A'
 * - grade is 80 to 89
 *    -> return 'B'
 * - grade is 70 to 79
 *    -> return 'C'
 * - grade is 60 to 69
 *    -> return 'D'
 * - grade is below 60
 *    -> return 'F'
 *
 * Make sure to handle invalid inputs by returning "Not a valid grade."
 *
 * @category 02 - Conditionals
 * @function testGrader
 * @param {number} grade
 * @returns {string}
 */

function testGrader(grade) {
    if (grade > 100 || grade < 0 || typeof(grade) !== "number") {
        return 'Not a valid grade.';
    } else if (grade >= 90 && grade <= 100) {
        return 'A';
    } else if (grade >= 80 && grade < 90) {
        return 'B';
    } else if (grade >= 70 && grade < 80) {
        return 'C';
    } else if (grade >= 60 && grade < 70) {
        return 'D';
    } else {
        return 'F';
    }
}

/**
 * #7: daysInTheMonth
 *
 * daysInTheMonth is a function that accepts one input: a monthNum that is between 1 and 12, inclusive.
 *
 * Complete the function daysInTheMonth given below by writing conditional statements that fulfill the following.
 *
 * - if the month is 1, 3, 5, 7, 8, 10, or 12
 *    -> return 31
 * - if the month is 4, 6, 9, 11
 *    -> return 30
 * - if the month is 2
 *    -> return 28
 *
 * Make sure to also handle invalid inputs by returning "Not a valid month."
 *
 * @category 02 - Conditionals
 * @function daysInTheMonth
 * @param {number} month - 1 to 12; represents months from January to December.
 * @returns {28 | 30 | 31 | "Not a valid month."}
 */

// function daysInTheMonth(month) {
//   if (month < 1 || month > 12 || typeof(month) !== "number"){
//     return "Not a valid month."
//   }
//   else if(month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12){
//     return 31;
//   }
//   else if (month === 4 || month === 6 || month === 9 || month === 11) {
//     return 30;
//   }
//   else if (month === 2){
//     return 28;
//   }
// }

// Catch-all statement at the top of this switch doesn't work
// See the answer below this version for the right way.

// function daysInTheMonth(month) {
//   switch (month) {
//     case typeof month !== "number":
//     case month > 12:
//     case month < 1:
//       return "Not a valid month."

//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//       return 31;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//       return 30;

//     default:
//         return 28;
//   }
//   }
  
  
  // This is a problem where many different conditions resolve to the same result. We have many possible results so this is a great place to use a switch statement.

function daysInTheMonth(month) {
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
    case 2:
      return 28;
    default:
      return "Not a valid month.";
  }
}

export {
  givenOne,
  givenTwo,
  givenThree,
  givenFour,
  numberOrString,
  truthyFalsy,
  letsGoParty,
  testGrader,
  daysInTheMonth,
};
