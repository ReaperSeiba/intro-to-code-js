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

Functions are just data; specifically a fancy type of object, which has the type `function`.

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

**Another example**

```js
function operateOnNum(num, cb) {
  console.log(cb(num));
}

function squareNum(x) {
  return x ** 2;
}

operateOnNum(5, squareNum); // 25
```

## Iterative methods that use callbacks

### What is an iterative methods?

An iterative method is one that accepts a callback function as an argument and then calls that callback sequentially at most once per element. (Typically for arrays)

### Examples

#### String

- `String.replace()` can accept a callback function vs just using a value.

```js
const somePhrase = "The quick brown fox jumped over the lazy dog.";

// using a value
console.log(somePhrase.replace("fox", "hamster"));

// defining a replace function
const replacerFn = (matched) => {
  console.log(`Hey look we matched: ${matched}`);
  return "banana";
};

// using a callback instead of a value
console.log(somePhrase.replace("fox", replacerFn));
```

#### Array

There are a ton of really useful iterative methods for arrays. The most important that you must know that use callbacks are:

- `.map()`:
- `.forEach()`

- `.filter()`
- `.sort()`
- `.includes()`
- `.find()`
- `.reduce()`
- `.some()/.every()`

Why do so many array methods use a callback?

- Arrays are collections of data and we often need to transform/use data in different ways; iteratives methods with callbacks simplify some really complex processes that are very commonly done.

##### .forEach vs .map

**.forEach**

.forEach iterates over a list an applies some operation with side effects to each member and does not return anything.

**.map**

.map iterates over a list, transforms each member of that list, and returns a new list of the same size with the transformed members.
You can store the results in a variable.

##### Other methods

**.filter**

Filter accepts a callback that keeps elements that return true from its callback function.

```js
const arr = [-2, -1, 0, 1, 2];

// Define a function biggerThanZero that tests whether or not a value is greater than 0
const biggerThanZero = (val) => val > 0;

console.log(arr.filter(biggerThanZero));
// [1, 2]
```

**.sort**

Sort accepts a callback that defines how the returned array should be sorted. Sort WITHOUT a callback will determine how the array should be sorted, which DOES NOT always match up with expectations.

```js
const arr = [-2, -12, 700, 91, 2];

// Define a callback sortAscending where you want to sort vals in ASC order
const sortAscending = (a, b) => a - b;
console.log(arr.sort(sortAscending));
// [ -12, -2, 2, 91, 700 ]
```

**.reduce**

Reduce executes the reducer callback on each element of the array in order, passing in the return value from the calculation on the preceding element. .reduce also optionally accepts a second parameter, to define the accumulators INITIAL value.

```js
// Define cb for reduce where you add the prev val to the current val to add all array vals together.

const easyArr = [1, 2, 3, 4];
const sumArr = (accumulator, currVal) => accumulator + currVal;

console.log(easyArr.reduce(sumArr, 0));

/**
 *          Accumulator       CurrVal     After Reduction
 * idx 0    0 (initial)       1           0 + 1 = 1
 * idx 1    1 (reduction)     2           1 + 2 = 3
 * idx 2    3                 3           3 + 3 = 6
 * idx 3    6                 4           6 + 4 = 10
 * - no more elements, return 10
 */
```

**.some()/.every()**

.some tests whether at least one element in the array passes the test within the implemented callback.

.every tests whether every element in the array passes the test within the implemented callback.

```js
const arr = [1, 2, 3, 4];

// Define a cb isEven that determines whether a num is even

const isEven = (val) => val % 2 === 0;

console.log(arr.some(isEven)); // true
console.log(arr.every(isEven)); // false
```

#### Inline callbacks and manually defining parameters

The majority of array methods that accept callbacks have three implicit parameters, in this order:

- Element, Index, Whole Array

##### Using the element parameter inline

```js
// Define an inline map callback that uppercases each string in an array
const strs = ["hello", "bye", "banana", "water"];

console.log(strs.map((str) => str.toUpperCase()));
//[ 'HELLO', 'BYE', 'BANANA', 'WATER' ]

// Another example
// Define a inline filter callback threeOrMore that determines whether the nested arr has more than two elements
const setOfArrs = [[1, 2, 3], [4], [], [6, 7, 8, 9], [10, 11]];

console.log(setOfArrs.filter((array) => array.length > 2));
```

##### Using the index parameter inline

```js
// Define a filter cb that removes all elements from an array with odd indexes.

const arr2 = [6, 7, 8, 9];

// Here we skip the element parameter with an underscore. We still need to pass it in as index is the second parameter expected. We can omit the wholeArray param if it's not used.
// as passed in cb
const removeEvenIdxs = (_, idx) => idx % 2 !== 0;
// console.log(arr2.filter(removeEvenIdxs));

// inline callback fn
console.log(arr2.filter((_, idx) => idx % 2 !== 0));
```

##### Using the wholeArr parameter inline

This parameter is useful if you need to do some referencing of values at different index comparatively with your current element.

```js
// Define an inline filter cb where you remove elements that are smaller than the element after them.

const someNums = [123, 745, 5, 34, 875, 99];

console.log(
  someNums.filter((ele, idx, arr) => {
    // KEEP: elements that are larger than their next element
    if (ele > arr[idx + 1] || arr[idx + 1] === undefined) {
      return true;
    }
    return false;
  })
);

// is the same thing as

console.log(
  someNums.filter((e, i, arr) => e > arr[i + 1] || arr[i + 1] === undefined)
);
```

#### Non-callback array methods to know

**.includes**

Returns true if passed in parameter is included within the array and false if not.

```js
const arr = [-12, -2, 2, 91, 700];

arr.includes(2); // true
arr.includes(22); // false
```

**.find**

Returns the first element that passes the testing function.

```js
const arr = [-2, -12, 700, 91, 2];

// Define a function divByThree that checks returns whether a val is divisible by 3.
const divByThree = (val) => val % 3 === 0;

console.log(arr.find(divByThree));
// -12
```

## Returning functions from functions

You can write a function that returns a function.

One of the reasons that we would create a function that returns a function is to standardize a set of processes based off of a differing set of inputs.

```js
// Define a function bananaSlapper that accepts a number input. bananaSlapper returns a function that uses no parameters that prints out the statement "WHACK! I have slapped a banana!" input number of times.

function bananaSlapper(num) {
  return function () {
    for (let i = 0; i < num; i++) {
      console.log("WHACK! I have slapped a banana!");
    }
    return `I have slapped a banana ${num} times.`;
  };
}

const threeSlap = bananaSlapper(3);
console.log(threeSlap());
console.log(threeSlap.toString());

// Logged:
// WHACK! I have slapped a banana!
// WHACK! I have slapped a banana!
// WHACK! I have slapped a banana!
// WHACK! I have slapped a banana!
// WHACK! I have slapped a banana!
// I have slapped a banana 5 times.

// Notice that the stringified function output DOES NOT substitute the enclosed value, so this means that our returned function remembers the num input separately as part of the bundle.

// function () {
//   for (let i = 0; i < num; i++) {
//     console.log("WHACK! I have slapped a banana!");
//   }
//   return `I have slapped a banana ${num} times.`;
// }
```

### Remembering things to use later - closure

A closure is a function that has access to it's parent's scope even after the parent function has closed.

It's a combination of a function bundled together, literally enclosed, with references to it's surrounding state; its lexical enviroment.

Let's breakdown `bananaSlapper`:

```js
// bananaSlapper is a function that accepts an input (num) that returns a function that uses the input (num) it stored from its parent scope. The returned bundle of stored input and function can then be called, and that returned function will run that function's instruction set using the stored value.

function bananaSlapper(num) {
  return function () {
    for (let i = 0; i < num; i++) {
      console.log("WHACK! I have slapped a banana!");
    }
    return `I have slapped a banana ${num} times.`;
  };
}
```

#### Going deeper

```js
// Define a function called identity. identity returns its own input, regardless of whatever function you give it.
function identity(input) {
  return input;
}

// anotherLayer is a variable that is assigned the function identity with the parameter of another function bananaSlapper that has it's own parameter of 3. Identity is a function that returns its own input, in this case bananaSlapper(3), which returns a function that uses it's parent's stored variable in this case 3. After execution anotherLayer is assigned the return from bananaSlapper, which is now a callable function.
const anotherLayer = identity(bananaSlapper(3));
console.log(anotherLayer());
```

### Partial functions aka currying

Currying is the process of turning a function from (n) number of arguments into a chain of nested (n) functions from a single argument.

A curried function is a set of functions generated from a single argument.

```js
// Define a function that accepts three nums, x,y,z and returns their sum.

function threeSum(x, y, z) {
  return x + y + z;
}

console.log(threeSum(3, 5, 8));

// Define a function threeSumInPartials that returns a nested chain of 3 single-input functions and ultimately returns their combined sum.

function threeSumInPartials(x) {
  return function (y) {
    // remembers x from parent
    return function (z) {
      // remembers x and y from both parents
      return x + y + z;
    };
  };
}

console.log(threeSumInPartials(3)(5)(8));
```

#### Currying with Callbacks

You can also curry with functions, since functions are just fancy data.

```js
// Define a function doItTwice that accepts a function and returns an enclosed function that accepts an arg. That enclosed function returns the result of running once on the arg and once on its result.

// Define a function doItTwice that accepts a function and returns an enclosed function that accepts an arg. That enclosed function returns the result of running once on the arg and once on its result.

// const doItTwice = (fn) => (arg) => fn(fn(arg));

// is the same as

function doItTwice(fn) {
  return function (arg) {
    return fn(fn(arg));
  };
}

const rootTwice = doItTwice(Math.sqrt);
const result = rootTwice(256);
console.log(result); // Math.sqrt(Math.sqrt(256)) => 4
```

This means our `threeSumInPartials` function from before can be written more concisely as

```js
const threeSumInPartials = (x) => (y) => (z) => x + y + z;
```

## Run it IMMEDIATELY - Immediately Invoked Functional Expressions

An IIFE is a functional expression that you define and call immediately with a value.

```js
// Define a function that accepts a array of name strings and says hi to everyone in the array. Call that immediately with the array ['John', 'Eve', 'Christian']
(function (arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Hi ${arr[i]}`);
  }
})(["John", "Eve", "Christian"]);

// is the same as

sayHi(["John", "Eve", "Christian"]);
// if sayHi was the pre-stored definition for that function
// it fits the pattern of functionDefinition(valuesToInvokeWith)
```

## Reference Links

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
- https://javascript.plainenglish.io/10-important-javascript-array-methods-you-must-know-bd791cbd6e43
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#how_reduce_works_with_an_initial_value
- [Example of a callback with manual inputs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#parameters)
- https://developer.mozilla.org/en-US/docs/Glossary/IIFE
