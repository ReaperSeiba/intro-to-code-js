# Methods, Functions, Errors, and Debugging

## What is a function?

- A reusable block of code that can optionally take inputs and optionally return outputs
  - A function can take any number of inputs including none.
- JS functions are objects.

### Anatomy of a function

- `function` reserved keyword
- Inputs aka parameters can be named and declared within the parentheses of a function definition.
- Functions can have no input, one input, multiple inputs, a variable number of inputs
  - See MDN: `arguments` object
- Functions have access to the `return` statement which ends function execution and specifies a value to be returned, even if that value is undefined.
  - Return statements typically are placed at the end of a particular branch of your functions control flow.
  - You can use a return to interrupt and immediately break out of a function.
  - You can also return functions (Closures)
- functions can be anonymous, or named with an identifier
  - typically standard fns are `camelCaseNamed`

**Special note about closures:** A closure is way to preserve variables from the outer scope of a function within the inner scope of a function.

### Types of functions

#### Anonymous Function

- Created as a function expression

```js
(function () {});
```

#### Named function expression

```js
(function otherFunc() {});
```

#### Function declaration

```js
function doStuff() {
  // does stuff
}
```

#### Arrow functions

- Arrow functions are the latest greatest way to write a function definition in a compact way.
- Arrow functions do have some differences when it comes to their own bindings, and should NOT be used as methods.

```js
const arrowFN = () => {};
```

### Examples of functions

#### With no params, no return

```js
function printToConsole() {
  console.log("Hi");
}
```

#### With one param

```js
// Define a function called helpMeFriend
// helpMeFriend accepts a name input, which is a string
// helpMeFriend returns a string of format, "Help me [[((name))]]"

function helpMeFriend(name) {
  return `Help me ${name}`;
}
```

#### With more than one param

```js
function helpMeFriendOfAge(name, age) {
  return `Help me ${name} that is ${age}`;
}
```

## Invoking (calling) functions

- Defining a function does not execute it, calling the function actually performs the specified actions with any indicated parameters.
- Functions can call themselves recursively.

### Executing functions

#### Standard call, no inputs

```js
// invoking printToConsole function
// assuming printToConsole is in the same scope

printToConsole();
```

#### Standard call, one input

```js
// invoking helpMeFriend function
// assuming helpMeFriend is in the same scope

helpMeFriend("Bob");
```

### With more than one param

```js
helpMeFriendOfAge("Jerry", 32);
```

## Hoisting functions

- Hoisting is a concept that essentially dictates that functions are always at the top of their scope.

### Example

#### Values

```js
// Not value hoisted
console.log(num); // returns ReferenceError

const num = "treefitty"; // but if var, valid log; NEVER DO THIS PLS!!
```

#### Scopes, Local Declarations

```js
let z = 100;

{
  console.log(z); // returns ReferenceError, because there's a locally scoped DEFINITION
  // CANNOT use vars before assignment

  let z = 101; // if this was a reassignment instead of a declaration, it would print 100
}
```

#### Functions

```js
console.log(square(5)); // prints 25

function square(n) {
  return n * n;
}

// the compiler reads the above like this:

// All function declarations are effectively at the top of the scope
function square(n) {
  return n * n;
}

console.log(square(5)); // 25
```

#### DNW with Function Expressions

```js
console.log(square(5)); // ReferenceError: Cannot access 'square' before initialization

const square = function (n) {
  return n * n;
};
```

## Methods: Functions that are properties on objects

- There are two kinds of methods
  - instance methods, a built-in tasks performed by an object instance.
  - static method, which are called directly on an object constructor.
- This also applies to JS built-in objects
  - Object
  - Array
  - Function
  - Boolean
  - Number
  - String
  - Math
  - Date

### Calling methods

- You can call methods off of any of the built-in JS objects to perform common tasks by 'dotting off' a value of an object instance, aka some string, number, Date

#### Dot-methods in action

```js
const word = "fish";

console.log(word.toUppercase()); // prints "FISH"
```

```js
const time = Date.now(); // number of ms since Jan 1, 1970

const humanDateTime = new Date(now).toString(); // Tue Feb 20 2024 20:38:56 GMT-0500 (EST)
```

```js
const calculation = Math.pow(2, 4);
console.log(calculation); // prints 16
```

- Check MDN for references of more methods available on instances of the built-in JS Objects.

## Properties

- A property is a value that corresponds to a particular object instance.

### Examples

```js
const easyWord = "pneumonoultramicroscopicsilicovolcanoconiosis";
console.log(easyWord.length); // prints 45
```

```js
const pi = Math.PI;
console.log(pi); // prints 3.14159...
```

- Check MDN for references of more properties available on instances of the built-in JS Objects.

## Scope: when things belong to other things, but not to other OTHER things

- Scope refers to the current context of your code. This current context determines where you can access certain variables and functions.
- Where you decide to define a variable or function impacts where you will have access to it later on.

![how scope works](https://blog.hubspot.com/hs-fs/hubfs/JavaScript_Scope-1.webp?width=650&height=450&name=JavaScript_Scope-1.webp)

### Global Scope

- Global scope means that a variable or function is available anywhere in your code
- This is the default scope for variable or functions in javascript.
- If we try to access a variable that is not within the global scope we will get an error.

```js
let faveAnimal = "Kiwi";

function printPet() {
  console.log(faveAnimal); // prints 'Kiwi' to console
}
```

### Local Scope

- A function or variable that is only available within the current code block.
- To create a local scope we can use curly braces `{}`;
- Local scope is sometimes also block scope.

```js
{
  const otherAnimal = "banana";
}
console.log(otherAnimal); // prints undefined to console
// no access to otherAnimal variable!
```

### Function Scope

- Function scope is similar to local scope in that variables and functions defined within a function are ONLY available inside that function.
- Variables and functions defined this way are NOT available globally.

```js
const printAnimal = () => {
  let diffAnimal = "Toyota";
  console.log(diffAnimal); // prints "Toyota"
};

console.log(diffAnimal); // prints undefined
```

### Block Scope

- Block scope allows us to create variables and functions that are only available within a code block.
- A code block is any time you use curly braces `{}`.

```js
if (true) {
  // this is a code block
} else {
  // this is also a code block
}

// Example
function printPet() {
  let pet = "cat";
  if (true) {
    // separate block scope means we COULD define a new variable with a common name
    // don't do that by the way lmao
    let pet = "dog";
    console.log(pet); // prints "dog"
  }
  console.log(pet); // prints "cat"
}
console.log(pet); // prints undefined
```
