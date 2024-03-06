# Loops

- [Loops](#loops)
  - [What is iteration?](#what-is-iteration)
  - [Types of Loops](#types-of-loops)
    - [`for` loop](#for-loop)
    - [Loop Condition](#loop-condition)
      - [Example](#example)
    - [Update condition](#update-condition)
      - [Using a `for` loop with a collection](#using-a-for-loop-with-a-collection)
  - [`for...of` loop](#forof-loop)
  - [`for...in` loop](#forin-loop)
  - [`while` loops](#while-loops)
    - [Converting a `for-loop` into a `while` loop](#converting-a-for-loop-into-a-while-loop)
  - [The Accumulator Pattern](#the-accumulator-pattern)
    - [Using assignment operators](#using-assignment-operators)
      - [Examples](#examples)
  - [`break`ing out of loops](#breaking-out-of-loops)
  - [Further Reading](#further-reading)

## What is iteration?

Iteration is the process of procedurally repeating steps.

## Types of Loops

### `for` loop

A `for` loop always contains the following components:

```
for (initial condition; loop condition (evaluating expr); update expression) {
  loop body
}
```

### Loop Condition

Loop best practice is to name your variable `i`, and then go to the next letter of the alphabet for any subsequent nested loops.

Example where the loop condition was false from the start; it will never run.

```js
for (let i = 0; i < -1; i++) {
  console.log("LaunchCode");
}
```

Examples where the loop condition was true from the start and never becomes false; an infinite loop.

**How to break out of an infinite loop in command line**: `Ctrl-C`

```js
for (let i = 0; i > -1; i++) {
  console.log("LaunchCode");
}
```

#### Example

```js
for (let i = 0; i < 51; i++) {
  console.log(i);
}
```

### Update condition

Update conditions can be more than simple increment or decrement by 1.

```js
let phrase = "LaunchCode's LC101";

for (let i = 0; i < phrase.length - 1; i = i + 3) {
  console.log(phrase[i]);
}
```

#### Using a `for` loop with a collection

Collections are:

- Arrays (and in a different way Objects)

```js
// Define an array pizzaToppingsILike.
// Print each element in that array onto a new line

let pizzaToppingsILike = ["pepperoni", "onions", "mushrooms"];

for (let i = 0; i < pizzaToppingsILike.length; i++) {
  console.log(pizzaToppingsILike[i]);
}
```

- Strings

```js
// Define a variable funnyWord.
// Write a for-loop that prints each character of funnyWord on a newline (console.log)

let funnyWord = "eggplant";

for (let i = 0; i < funnyWord.length; i++) {
  console.log(funnyWord[i]);
}
```

## `for...of` loop

The for-of loop operates on a sequence of values sourced from an iterable object.

- Array, String, Map, Set, Node List, `arguments` object for functions

For-of loops are useful when you don't care about changing away from the default evaluation condition and update expression that would be present in a normal for loop.

```js
// Define a str. Write a for-of loop that prints each char in str.

let forOfStr = "phish";

for (const char of forOfStr) {
  console.log(char);
}
```

## `for...in` loop

For-in loops iterate over enumerable string properties of an object.

More details about this loop in a later Objects lecture

```js
// Using for-in loop

const threeKeyVals = { a: 1, b: 2, c: 3 };

for (const property in threeKeyVals) {
  console.log(`threeKeyVals.${property} = ${threeKeyVals[property]}`);
}
```

## `while` loops

While loops provide a much more general way to iterate compared to a for-loop. While loops will continue to repeat as long as it's boolean expression evaluates to `true`. The condition typically includes a value that is updated within the loop so that the expression eventually becomes `false`.

### Converting a `for-loop` into a `while` loop

```js
// for-loop to convert
// for (let i = 0; i < 51; i++) {
//   console.log(i);
// }

// Two variable approach
myNum = 0;
targetNum = 51;

while (myNum < targetNum) {
  console.log(myNum);
  myNum += 1;
}

// One variable approach
myNum = 0;

while (myNum < 51) {
  console.log(myNum);
  myNum++;
}
```

## The Accumulator Pattern

A pattern is a commonly used approach to solve a group of programming problems.

### Using assignment operators

Assignment operators allow you to perform an operation on a value and assign it the new value all in one step.

Some of the valid operations are:

```js
q -= 9; // is the same as writing q = q - 9
q += 9;
q *= 9;
q /= 9;
q **= 2;
```

#### Examples

**Strings**

```js
// Define two variables, n and total. You decide what the appropriate values should be.
// Write a for-loop that adds up all the numbers from 1 to n, and logs the total after.

let n = 100;
let total = 0;

for (let i = 1; i <= n; i++) {
  total += i;
}
console.log(total); // 5050
```

```js
// Define two variables str, and reversed.
// Write a for-loop that will reverse str, and then log it after.

// Decrementing method
let str = "pasta";
let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}
console.log(reversed);

// Incrementing method
for (let i = 0; i < str.length; i++) {
  // Eve's method
  const currRevChar = str[str.length - 1 - i];
  reversed += currRevChar;

  // Simpler approach
  const currChar = str[i];
  reversed = currChar + reversed;
}
```

**Array based**

```js
// Define an array nums. nums should be at least 5 numbers long
// Write for-loop that adds up all the numbers in the array.
let nums = [1, 2, 3, 4, 5];
let total = 0;

for (let i = 0; i < nums.length; i++) {
  total += nums[i];
}
console.log(total);
```

## `break`ing out of loops

`break` is a keyword that is reserved for terminating a loop before it would normally complete.

```js
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
```

## Further Reading

- [Increment | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment)
- [Decrement | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Addition assignment | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition_assignment)
- [for...of | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
