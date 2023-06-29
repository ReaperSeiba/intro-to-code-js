/**********************************
 * #1: Logically speaking
 *
 * Using the four given variables below, define four new variables and assign their values as follows:
 *
 * AND (&&)
 * a) Define andTrue. Use two of the givens and the && operator so that the evaluated value is true.
 * b) Define andFalse. Use two of the givens and the && operator so that the evaluated value is false.
 *
 * OR (||)
 * c) Define orTrue. Use two of the givens and the || operator so that the evaluated value is true.
 * d) Define orFalse. Use two of the givens and the || operator so that the evaluated value is true.
 *
 * See:
 * AND: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND
 * OR: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR
 */

const givenOne = 64 < 2; // false
const givenTwo = "cheese" === "cheese"; // true
const givenThree = 15 / 3 === 5; // true
const givenFour = 12 > 13; // false

// Replace this comment with your code.

/**********************************
 * #2: 5 characters
 *
 * Define the variable notFiveChars.
 * Assign it a string that's not 5 characters long.
 *
 * Define the variable isItFiveChars.
 * Assign it a ternary that checks to see if notFiveChars has length 5.
 * - True output: "it's 5 characters"
 * - False output: "not 5 characters"
 *
 * See:
 * String length: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
 * Ternary: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 */

// Replace this comment with your code.

/**********************************
 * #3: numberOrString
 *
 * numberOrString is a function that accepts one input, a value of any type.
 * numberOrString returns the following based on these conditions:
 *
 * - "This is a string" if the value is a String
 * - "This is a number" if the value is a Number
 * - "This is not a string nor a number" if it's neither
 *
 * SEE:
 * - return statement: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return
 */

function numberOrString(value) {
  // Replace this comment with your code inside this function block.
}

/**********************************
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
 */

function truthyFalsy(value) {
  // Replace this comment with your code inside this function block.
}

/**********************************
 * #5: testGrader
 *
 * testGrader is a function that accepts one input: a grade that is between 0 and 100. testGrader returns a letter grade that corresponding the
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
 */

function testGrader(grade) {
  // Replace this comment with your code inside this function block.
}
/**********************************
 * #6: daysInTheMonth
 *
 * daysInTheMonth is a function that accepts one input: a monthNum that is between 1 and 12.
 *
 * Complete the function daysInTheMonth given below by writing conditional statements that fulfill the following.
 *
 * - if the month is 1, 3, 5, 7, 8, 10, or 12
 *    -> return 31
 * - if the month is 4, 6, 9, 11
 *    -> return 30
 * - if the month is 2
 *    -> return 28
 */

function daysInTheMonth(monthNum) {
  // Replace this comment with your code inside this function block.
}
/**
 * The code below is what tests your answers.
 *
 * To test your answers to one of the problems above:
 * 1. Find the number of the problem you're working on
 * 2. Remove the `x` in `xdescribe` so that it reads `describe`
 * 3. Hit the Run button in REPL or enter `npm test` in your terminal
 */
import { expect } from "chai";

describe("02 - Conditionals", () => {
  describe("#1: Logically speaking", () => {
    describe("Using the && (AND) operator", () => {
      it("andTrue -> evaluates two givens with && to TRUE", () => {
        expect(andTrue).to.be.true;
      });

      it("andFalse -> evaluates two givens with && to FALSE", () => {
        expect(andFalse).to.be.false;
      });
    });

    describe("Using the || (OR) operator", () => {
      it("orTrue -> evaluates two givens with || to TRUE", () => {
        expect(orTrue).to.be.true;
      });

      it("orFalse -> evaluates two givens with || to FALSE", () => {
        expect(orFalse).to.be.false;
      });
    });
  });

  xdescribe("#2: 5 characters", () => {
    describe("notFiveChars", () => {
      it("is a string that isn't 5 characters long", () => {
        expect(notFiveChars).to.be.a("string").to.not.have.lengthOf(5);
      });
    });

    describe("isItFiveChars", () => {
      it("resolves to the String `it's 5 characters`", () => {
        expect(isItFiveChars).to.equal("not 5 characters");
      });
    });
  });

  xdescribe("#3: numberOrString", () => {
    describe("returns the correct output", () => {
      it("string input -> 'This is a string'", () => {
        expect(numberOrString("")).to.equal("This is a string");
        expect(numberOrString("a")).to.equal("This is a string");
        expect(numberOrString("word")).to.equal("This is a string");
        expect(numberOrString("two words")).to.equal("This is a string");
        expect(numberOrString("a1b2c3")).to.equal("This is a string");
      });

      it("number input -> 'This is a number'", () => {
        for (let i = 1; i <= 100; i++) {
          let num = i * Math.ceil(Math.random() * 99);
          expect(numberOrString(num)).to.equal("This is a number");
        }
      });

      it("any other input -> 'This is not a string nor a number'", () => {
        let types = [{ a: 1 }, [1, 2, 3], false];

        types.forEach((type) => {
          expect(numberOrString(type)).to.be.a("string");
        });
      });
    });
  });
  xdescribe("#4: truthyFalsy", () => {
    describe("returns false", () => {
      it("value -> 0", () => {
        expect(truthyFalsy(0)).to.be.false;
      });

      it('value -> ""', () => {
        expect(truthyFalsy("")).to.be.false;
      });

      it("value -> null", () => {
        expect(truthyFalsy(null)).to.be.false;
      });

      it("value -> undefined", () => {
        expect(truthyFalsy(undefined)).to.be.false;
      });
    });

    describe("returns true", () => {
      it("value -> false", () => {
        expect(truthyFalsy(false)).to.be.false;
      });

      it("value -> any other number", () => {
        expect(truthyFalsy(1)).to.be.true;
        expect(truthyFalsy(Math.PI)).to.be.true;
        expect(truthyFalsy(Infinity)).to.be.true;
      });

      it("value -> any other string", () => {
        expect(truthyFalsy("a")).to.be.true;
        expect(truthyFalsy("hello 'world'")).to.be.true;
        expect(truthyFalsy(`template expression 1 + 2 = ${1 + 2}`)).to.be.true;
      });

      it("value -> an array", () => {
        expect(truthyFalsy([])).to.be.true;
        expect(truthyFalsy([1])).to.be.true;
        expect(truthyFalsy([1, 2, 3, 4, 5])).to.be.true;
      });

      it("value -> an object", () => {
        expect(truthyFalsy({})).to.be.true;
        expect(truthyFalsy({ a: 1 })).to.be.true;
      });
    });
  });

  xdescribe("#5: testGrader", () => {
    describe("returns the correct grade", () => {
      it("when grade is between 90 and 100", () => {
        expect(testGrader(100)).to.equal("A");
        expect(testGrader(97)).to.equal("A");
        expect(testGrader(93)).to.equal("A");
        expect(testGrader(90)).to.equal("A");
      });

      it("when grade is between 80 and 89", () => {
        expect(testGrader(89)).to.equal("B");
        expect(testGrader(87)).to.equal("B");
        expect(testGrader(83)).to.equal("B");
        expect(testGrader(80)).to.equal("B");
      });

      it("when grade is between 70 and 79", () => {
        expect(testGrader(79)).to.equal("C");
        expect(testGrader(77)).to.equal("C");
        expect(testGrader(73)).to.equal("C");
        expect(testGrader(70)).to.equal("C");
      });

      it("when grade is between 60 and 69", () => {
        expect(testGrader(69)).to.equal("D");
        expect(testGrader(67)).to.equal("D");
        expect(testGrader(63)).to.equal("D");
        expect(testGrader(60)).to.equal("D");
      });

      it("when grade is below 60", () => {
        for (let i = 0; i < 60; i++) {
          let gradeUnder60 = Math.ceil(Math.random() * 59);
          expect(testGrader(gradeUnder60)).to.equal("F");
        }
      });
    });
  });

  xdescribe("#6: daysInTheMonth", () => {
    describe("returns the correct number of days", () => {
      it("when the month is 1, 3, 5, 7, 8, 10, 12", () => {
        expect(daysInTheMonth(1)).to.equal(31);
        expect(daysInTheMonth(3)).to.equal(31);
        expect(daysInTheMonth(5)).to.equal(31);
        expect(daysInTheMonth(7)).to.equal(31);
        expect(daysInTheMonth(8)).to.equal(31);
        expect(daysInTheMonth(10)).to.equal(31);
        expect(daysInTheMonth(12)).to.equal(31);
      });

      it("when the month is 4, 6, 9, 11", () => {
        expect(daysInTheMonth(4)).to.equal(30);
        expect(daysInTheMonth(6)).to.equal(30);
        expect(daysInTheMonth(9)).to.equal(30);
        expect(daysInTheMonth(11)).to.equal(30);
      });

      it("when the month is 2", () => {
        expect(daysInTheMonth(2)).to.equal(28);
      });
    });
  });
});
