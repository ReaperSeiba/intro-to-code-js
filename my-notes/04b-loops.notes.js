// for (let i = 0; i < 51; i++) {
//   console.log(i);
// }

// Define a variable funnyWord.
// Write a for-loop that prints each character of funnyWord on a newline (console.log)

let funnyWord = "eggplant";

// for (let i = 0; i < funnyWord.length; i++) {
//   console.log(funnyWord[i]);
// }

// Define an array pizzaToppingsILike.
// Print each element in that array onto a new line

let pizzaToppingsILike = ["pepperoni", "onions", "mushrooms"];

// for (let i = 0; i < pizzaToppingsILike.length; i++) {
//   console.log(pizzaToppingsILike[i]);
// }

let phrase = "LaunchCode's LC101";

// for (let i = 0; i < phrase.length - 1; i = i + 3) {
//   console.log(phrase[i]);
// }

let q = 100;
// q = q + 121;

// q = q - 9
q -= 9;
q += 9;
q *= 9;
q /= 9;
q **= 2;
// console.log(q);

// Define two variables, n and total. You decide what the appropriate values should be.
// Write a for-loop that adds up all the numbers from 1 to n, and logs the total after.

let n = 100;
// let total = 0;

// for (let i = 1; i <= n; i++) {
//   total += i;
// }
// console.log(total);

// Define two variables str, and reversed.
// Write a for-loop that will reverse str, and then log it after.

let str = "ti did uoy pey";
let reversed = "";

for (let i = 0; i < str.length; i++) {
  // Eve's method
  // const currRevChar = str[str.length - 1 - i];
  // reversed += currRevChar;

  // Simpler approach
  const currChar = str[i];
  reversed = currChar + reversed;
}
// console.log(reversed);

// Decreme
// for (let i = str.length - 1; i >= 0; i--) {
//   reversed += str[i];
// }
// console.log(reversed);

// Define an array nums. nums should be at least 5 numbers long
// Write for-loop that adds up all the numbers in the array.
let nums = [1, 2, 3, 4, 5];
let total = 0;

for (let i = 0; i < nums.length; i++) {
  total += nums[i];
}
// console.log(total);

// Using for-of
// Define a str. Write a for-of loop that prints each char in str.

// let forOfStr = "phish";

// for (const char of forOfStr) {
//   console.log(char);
// }

// Using for-in loop

const threeKeyVals = { a: 1, b: 2, c: 3 };

// for (const property in threeKeyVals) {
//   console.log(`threeKeyVals.${property} = ${threeKeyVals[property]}`);
// }

// Converting a for-loop into a while loop

// for (let i = 0; i < 51; i++) {
//   console.log(i);
// }

// myNum = 0;
// targetNum = 51;

// while (myNum < targetNum) {
//   console.log(myNum);
//   myNum += 1;
// }

myNum = 0;

// while (myNum < 51) {
//   console.log(myNum);
//   myNum++;
// }

// Define a number max.
// Write a while loop that decrements from max down to 0.
// Log each number
// If the current value of max is divisible by 11, break out of the while loop, without logging that value.

let max = 34820573;

while (max > 0) {
  if (max % 11 === 0) {
    break;
  }
  console.log(max);
  max--;
}
