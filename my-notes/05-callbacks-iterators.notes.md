# Callbacks and Iterators

## WTF is a function?

- Functions are a reusable, callable block of code.
- Like variables, functions often also have names

### Examples of functions you already know

- console.log()
- Math.random()
- Type conversion functions
  - Number()
  - String()
  - Boolean()
- String and array methods, `indexOf()`

### How to use a function

By typing the functions name followed by (), we can call the function. Sometimes you can pass input data between the () as parameters which the function will use to carry out its actions.

**What happens when you log a defined function without calling it?**

It logs it's type and name. There are some other funky interactions as well.

```js
function stuff() {
  console.log("this is a function");
}

// Logging a function without calling it
console.log(stuff);
// [Function: stuff]

// We can also log the literal code definition by calling a function's built-in .toString()
console.log(stuff.toString());
// function stuff() {
//   console.log("this is a function");
// }

// We can also access a function's name by reading the property of a function, which itself is an object-like construct
console.log(stuff.name);
// stuff
```

## Arguments, Inputs, and Parameters

What's the difference between all three?

- Nothing.
- There's actually a difference.

### `arguments` as its own special thing

`arguments` is the array-like collection of all the inputs and parameters that we give a function.

All functions have this `arguments` object.

```js
// a and b are params, 2 params
function twoSum(a, b) {
  return a + b;
}

// Define a function allSum, where you can pass as many nums
// as you want, and the function returns their sum
function allSum() {
  console.log(arguments);
}

// call the function with some random numbers
allSum(1, 5, 7, 10);

// what gets logged is the arguments object, where the keys are stringified-indexes
[Arguments] { '0': 1, '1': 5, '2': 7, '3': 10 }
```

You can iterates through this `arguments` object using a loop, and complete our `allSum` function.

```js
function allSum() {
  console.log(arguments);

  let total = 0;

  for (let i = 0; i < arguments.length; i++) {
    const currArg = arguments[i];
    console.log(currArg);

    total += currArg;
  }

  // or use the for-of syntax, since it's array-like
  // for (const hamSammich of arguments) {
  //   total += hamSammich;
  // }

  return total;
}

console.log(allSum(1, 5, 7, 10));
// 23
```

## Other Rules of Functions

- use camelCase.
- Use verb-noun pairs when applicable.
  - BAD: sum()
  - GOOD: getSomeNumsSum()
- Use descriptive names.
  - BAD: convertTemp()
  - GOOD: convertTempCToF()
- Functions should do one thing.
- Functions are just REALLY fancy values.

## Functions are just really fancy values

Functions are just data.`allSum`

```js
console.log(typeof allSum);
// function
```

## Named vs no-name: anonymous functions

You can remove the name from a function, but often times when you do, you assign these to variables instead, creating an anonymous function variable.

```js
// Named function
function logInput(input) {
  console.log(input);
}

// Anonymous function
function(input) {
    console.log(input);
}

// Anonymous function variable
let addTwoNums = function (a,b) {
  return a + b
}

// You can then call the variable name and pass it values, just like a normal function
console.log(addTwoNums(274, 998))
// 1272

// Assigning an AFV to a new variable works by pass-by-reference

let otherFunc = addTwoNums;

console.log(otherFunc(10, 15));
// 25
```

## Functions as arguments, aka a Callback

Since functions are data, we can pass them around just like any other value.

This allows the function being called to use a function argument to carry out it's action.

Callbacks are functions passed as an argument to another function.
To use callbacks correctly, remember that they serve as function parameters, which are placeholder for the real invocation.

```js
// Here, fn is our callback; a and b are the inputs for the callback, and x is x
function addTwoNumsTimesX(fn, a, b, x) {
  return fn(a, b) * x;
}

// In the real call, we substitute with our real values
console.log(addTwoNumsTimesX(addTwoNums, 22, 11, 5));
// 165
```
