# 06 - Objects

- [06 - Objects](#06---objects)
  - [What is an object?](#what-is-an-object)
  - [Anatomy of a object](#anatomy-of-a-object)
    - [Basic object accessing](#basic-object-accessing)
    - [Dot-notation](#dot-notation)
    - [Bracket notation](#bracket-notation)
    - [Variable access](#variable-access)
    - [Complex access](#complex-access)
      - [Complex assignments](#complex-assignments)
  - [Shorthand assignment](#shorthand-assignment)
  - [Destructuring: Quickly breaking down an object](#destructuring-quickly-breaking-down-an-object)
  - [Object mutation (assigning values to an object/sub-object)](#object-mutation-assigning-values-to-an-objectsub-object)
    - [Note on nested assignment](#note-on-nested-assignment)
  - [Removing properties](#removing-properties)
  - [PBR vs PBV: Object edition](#pbr-vs-pbv-object-edition)
  - [Methods: Object functions](#methods-object-functions)
    - [Method Shorthand](#method-shorthand)
  - [Types: Objects, and OBJECTS](#types-objects-and-objects)
  - [Talking about `this`](#talking-about-this)
    - [What is `this`?](#what-is-this)
    - [`this` is self-referential](#this-is-self-referential)
    - [`this` is evaluated at run-time](#this-is-evaluated-at-run-time)
    - [`this` as the global object](#this-as-the-global-object)
    - [Arrow functions do NOT have a `this` context](#arrow-functions-do-not-have-a-this-context)
  - [Spread Syntax, for Objects](#spread-syntax-for-objects)
  - [Optional Chaining](#optional-chaining)
    - [Variant Usage](#variant-usage)
      - [`?.()` -- Optional invocation](#----optional-invocation)
      - [`?.[]` -- Optional property access](#----optional-property-access)
  - [Looping through Objects](#looping-through-objects)
    - [`for...in` loop](#forin-loop)
    - [Using Object methods](#using-object-methods)
      - [Object.keys](#objectkeys)
      - [Object.values](#objectvalues)
      - [Object.entries](#objectentries)
  - [Relevant Links](#relevant-links)

## What is an object?

An object is a collection of properties and the property is an association between a key and a value.

## Anatomy of a object

- An object is put together using {} to collect the object's key and value property pairs.
- Valid JS object keys are strings or values that are allowed to be used as variable names.
  - Hyphens are not allowed to be used in key names if the key is not explicitly stringified.
    - e.g. `with-hyphen` vs `"with-hyphen"`

```js
const obj1 = {
  mostRecentMeal: "loaded pizza fries",
  "with-hyphen": 42,
  314: 1519,
};

console.log(obj1); // is simple reference
console.log(typeof obj1); // "object"
console.log(obj1["with-hyphen"]); // using brackets to access string keys
```

### Basic object accessing

- One of the ways to access property values on a given object is through the use of dot-notation (object.property)
- Another way that we can access property values on an object is through bracket notation. e.g. object["property"]
- Keys can have nested objects as their value pair.
  - And in the case of these keys we can access by dotting off of those if we wanted to use dot-notation.

### Dot-notation

Dot-notation is when you use a period in between the object, which is being used as the namespace, and the key for the value you want to access.

In a deeply nested object, we can chain together different key properties using dots to move deeper into the nested object chain.

```js
const obj2 = {
  lv1: {
    lv2: {
      lv3: {
        lv4: "hello you found me",
      },
    },
  },
};

console.log(obj2.lv1.lv2.lv3.lv4); // "hello you found me"
```

### Bracket notation

- When you use bracket notation for objects you must use explicit strings as your key values and not the interpreted strings that would be present during an object's definition.
- Use brackets in place of dots to separate nested keys from eachother and we cannot use the key name unstringified. Example object["key1"]["key2"]["key3"]

```js
const obj1 = {
  mostRecentMeal: "loaded pizza fries",
  "with-hyphen": 42,
  314: 1519,
};

console.log(obj1["mostRecentMeal"]);
console.log(obj1["with-hyphen"]);
console.log(obj1["314"]);
```

### Variable access

- The only way to work with variables to access key value pairs in an object is by directly using them in bracket notation.

```js
let someVar = "fruits";

const foods = {
  fruits: ["banana", "kiwi", "strawberry", "cranberries"],
};

console.log(fruits[someVar]);
// [ 'banana', 'kiwi', 'strawberry', 'cranberries' ]
```

### Complex access

Based on the particular data patterns of a complexly nested object, you may need to work out some fancy access patterns.

```js
const obj9 = {
  key1: "hello",
  "longer-key-name-here": 42,
  nest: {
    lv2: "banana",
    grades: [
      { name: "Sally", grade: 11 },
      { name: "Terrence", grade: 12 },
      { name: "Jacob", grade: 1599 },
    ],
  },
};

console.log(obj9.key1); // "hello"
console.log(obj9["longer-key-name-here"]); // 42
console.log(obj9.nest.lv2); // banana

// Working with arrays of objects and their k-v pairs
console.log(obj9["nest"]["grades"][1]["grade"]); // 12
console.log(obj9.nest.grades[1].grade); // 12
```

#### Complex assignments

```js
// Using obj9 above

// Top-level assignment; k: food, v: rice
obj9.food = "rice";
console.log(obj9.food);

// Deeply nested value reassignment
obj9.nest.grades[0].grade = 12;
console.log(obj9.nest.grades);
```

## Shorthand assignment

You can quickly create key values using existing variables through shorthand object assignment. All you need to do is reference the name of the variable inside of the object and the object will use the variable name as the key and it's value as the new assigned value.

```js
const num = 6;
const str = "fish";
const bool = false;
const arr = [4, 5, 6];
const obj = { hi: "mom" };
const fn = () => "yo";

const shorthand = {
  num,
  str,
  bool,
  arr,
  obj,
  fn,
};

console.log(shorthand);
// {
//   num: 6,
//   str: 'fish',
//   bool: false,
//   arr: [ 4, 5, 6 ],
//   obj: { hi: 'mom' },
//   fn: [
// }
```

## Destructuring: Quickly breaking down an object

Destructuring is the process that works in the reverse manner as shorthand assignment. Where shorthand assignment uses a variable to extract a key name and value for into an object, destructuring uses an objects KV pair to extract variables out.

```js
// object with 3 keys -- date, id, entries
const scheduleData = {
  date: "03.27",
  id: "03.27",
  entries: [
    {
      start_time: "2021-03-27T05:32:00+0000",
      end_time: "2021-03-27T14:31:00+0000",
      scheduled_show: {
        mix_title: null,
        featured_residents: [
          {
            mix_resident: {
              resident_name: "vel",
              _meta: {
                uid: "dev-res-thank-you-scientist",
                type: "resident",
              },
            },
          },
        ],
      },
    },
  ],
};

// Destructuring assignment creates three variables using the key names and their respective values
const { entries, date, id } = scheduleData;

// Now that they're just variables, use them as you please.
console.log(date, id); // "03.27", "03.27"
```

## Object mutation (assigning values to an object/sub-object)

You can modify objects and add key value pairs after it's initial declaration by simply using dot-notation with your desired keyname and assigning it some value.

You can also do the same sort of assignment using bracket notation as well.

```js
const obj3 = {};

// dot-notation assignment
obj3.sport = "basketball";

// bracket notation assignment
obj3["shoes"] = "sneakers";

console.log(obj3.sport); // "basketball"
console.log(obj3.shoes); // "sneakers"
```

#### Note on nested assignment

For us to create nested values within an existing object, we need to define an object at each level until we get to the final internal object.

```js
const obj3 = {};

// using dot-notation to define each nested level as an object
obj3.country = {};
obj3.country.state = {};

// the actual k-v assignment within the "state" sub-object
obj3.country.state.city = "Tokyo";
```

## Removing properties

To remove a key-value pair from somewhere within an object you use the 'delete' operator with the reference to the specific key-value pair. "ex: delete object.reference;"

```js
const objWithStuffToRemove = {
  breakfast: "coffee",
  lunch: "pulled chicky sando",
  dinner: "...",
  birthday: "who cares",
};

// Remove the "birthday" k-v pair from the obj
delete objWithStuffToRemove.birthday;

console.log(objWithStuffToRemove);
// { breakfast: 'coffee', lunch: 'pulled chicky sando', dinner: '...' }
```

## PBR vs PBV: Object edition

When you create a variable in JS, it reserves a space in the computer's memory. This space will hold the value assigned to that variable.

- PBV: Pass-by-value; When a variable is assigned to another variable the value that is stored is copied into the new variable. These two variable values are independent of each other, each occupying it's own memory space.

  - strings
  - numbers
  - booleans

- PBR: Pass-by-reference; When a variable is assigned to another variable it does not copy the value but instead copies the reference to the value. Both variables now point to the same memory space, which means that changes through one variable are reflected when accessing the object through the other variable.
  - array
  - object

## Methods: Object functions

A method is an object function. Methods are defined the way normal functions are defined, except they have to be assigned as the property of an object.

```js
const methods = {
  helloWorld: function () {
    console.log("Hello World");
  },
};

methods.helloWorld();
```

You can attach methods to an existing object by assigning them a function expression.

```js
// assign methods a function goodbyeWorld
methods.goodbyeWorld = function () {
  console.log("Goodbye World");
};
methods.goodbyeWorld();
```

You can also assign/create new key-value pairs for methods indirectly by referencing an existing function as the value to use.

```js
function welcomeBackWorld() {
  console.log("Welcome Back World");
}

methods.welcomeBackWorld = welcomeBackWorld;
```

### Method Shorthand

There exists a shorter syntax to defining methods. We can just omit the function declaration and write out the name of the function as the method name.

```js
const methods = {
  helloWorld: function () {
    console.log("Hello World");
  },
  //
  printName() {
    console.log("your name");
  },
};

methods.printName();
```

## Types: Objects, and OBJECTS

It's important to remember that in JS objects are both a data type and a data structure. Arrays are object like collections that are one of many different collection types available in JS.

```js
let myArray = ["ketchup", "mustard", "relish"];

const myObj = {
  hotdog: "hot dog",
  hamburger: "hamburger",
  cheeseburger: "cheeseburger",
};

console.log("arr", typeof myArray); // "object"
console.log("obj", typeof myObj); // "object"
```

We can distinguish between arrays and key valued object by using the `Array.isArray()` method on the value we want to check. This method returns a simple boolean as to whether the value is an array.

```js
console.log("arr", Array.isArray(myArray)); // true
console.log("obj", Array.isArray(myObj)); // false
```

## Talking about `this`

### What is `this`?

The `this` keyword refers to the context where a piece of code, such as a function's body, is supposed to run. Most typically, it is used in object methods, where `this` refers to the object that the method is attached to. `this` thus allowing the same method to be used on different objects.

### `this` is self-referential

The `this` keyword when used inside object methods allows you to reference the object that you are executing within.

```js
let j = {
  name: "Jerry",
  age: 47,
  sayHi() {
    console.log(this.name);
  },
};

// console.log(j.sayHi()); // "Jerry"
```

### `this` is evaluated at run-time

As a standalone reference, this particularly example within a function does not error. That is because `this` is evalulated during the runtime depending on the context.

```js
function what() {
  console.log(this.name);
}

what();
```

This is an important thing to understand because context can be changed before `this` is evaluated.

```js
function what() {
  console.log(this.name);
}

const p1 = { name: "Tom" };
const p2 = { name: "Jill" };

// Assigning the function what to a property changes `this` to the specific object it's assigned to.
p1.w = what;
p2.w = what;

p1.w(); // "Tom"
p2.w(); // "Jerry"
```

### `this` as the global object

Changing the console.log call within the function to simply output `this` again follows the same rule of context-specific evaluation. In this context when we call the what function, the context is the global object, so the global object is logged, in this specific case the node environment we are running this file in.

```js
function what() {
  console.log(this);
}

what(); // <- in the global scope, therefore context is global

// Logs the global object: details about our node env
// <ref *1> Object [global] {
//   global: [Circular *1],
//   queueMicrotask: [Function: queueMicrotask],
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   structuredClone: [Function: structuredClone],
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   atob: [Function: atob],
//   btoa: [Function: btoa],
//   performance: Performance {
//     nodeTiming: PerformanceNodeTiming {
//       name: 'node',
//       entryType: 'node',
//       startTime: 0,
//       duration: 33.71710000000894,
//       nodeStart: 2.279299999587238,
//       v8Start: 4.986399999819696,
//       bootstrapComplete: 25.287800000049174,
//       environment: 13.071599999442697,
//       loopStart: -1,
//       loopExit: -1,
//       idleTime: 0
//     },
//     timeOrigin: 1715125716073.41
//   },
//   fetch: [AsyncFunction: fetch]
// }
```

### Arrow functions do NOT have a `this` context

Arrow functions are special they don't have their own `this`. If we reference `this` from an arrow function it's taken from the normal outer context.

```js
// is undefined
const whoa = {
  name: "Sandy",
  sayHi: () => console.log(this.name),
};

whoa.sayHi(); // undefined

// is "Sandy"
const whoa = {
  name: "Sandy",
  sayHi() {
    let arrow = () => {
      console.log(this.name);
    };
    arrow();
  },
};

whoa.sayHi(); // "Sandy"
```

This is why you don't ever really want to use arrow functions WHEN YOU NEED a `this` context.

## Spread Syntax, for Objects

Spread syntax is written out as an ellipsis, `...`, and allows you to expand an iterable into its individual elements.

Spread syntax also allows you to clone objects in an immutable way.

**IMMUTABLE:** Cannot mutate.

```js
const base = {
  temperature: "hot",
  weather: "sunny",
};

const withCity = {
  city: "Cattaraugus",
  ...base,
};

console.log(withCity);
// { city: 'Cattaraugus', temperature: 'hot', weather: 'sunny' }
```

## Optional Chaining

Optional Chaining is a recent addition to JS that allows us to handle one of the classic challenges with working with objects.

Optional chaining allows us to optionally check an evaluate nested key values and stop the evaluation if the value before `?.` is either `undefined` or `null` and then returns `undefined`.

```js
const person2 = {};

// console.log(person2.address.streetAddr);
// TypeError: Cannot read properties of undefined (reading "streetAddr")

// Method below does the existence and provides the "not found" value to use
console.log(
  person2
    ? person2.address
      ? person2.address.streetAddr
        ? person2.address.streetAddr.aptNum
        : undefined
      : undefined
    : undefined
);

// Method below uses a Boolean AND to connect statements and handle partial evaluation to undefined
console.log(
  person2 &&
    person2.address &&
    person2.address.streetAddr &&
    person2.address.streetAddr.aptNum
);

// Optional chaining can handle possible undefined vals
console.log(person2?.address?.streetAddr?.aptNum);
```

### Variant Usage

#### `?.()` -- Optional invocation

This is used to call a function that may not exist.

We can use the ?.() call to optionally invoke something that is found to be a function.

```js
const person2 = {
  address: {
    printAddr() {
      return "some addr";
    },
  },
};

console.log("printAddr", person2?.address?.printAddr?.());
// printAddr some addr
```

#### `?.[]` -- Optional property access

If we'd like to use brackets to access properties instead of dots, e.g we're using a set value programmatically, then we want to use the optional bracket.

```js
const keyToFind = "accountNum";

const obj7 = {};

const obj8 = {
  accountNum: "abcd1234",
};

console.log(obj7?.[keyToFind]);
console.log(obj8?.[keyToFind]);
```

## Looping through Objects

### `for...in` loop

The for in loop allows you to traverse over all keys of an object.

You should not rely on the visual top down listing of key value pairs as the order that `for...in` loop will work.

```js
let countryCodes = {
  49: "Germany",
  41: "Switzerland",
  44: "Great Britain",
  1: "USA",
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  "+1": "USA",
};

for (key in countryCodes) {
  const val = countryCodes[key];
  console.log(key, val);
}

// 1 USA
// 41 Switzerland
// 44 Great Britain
// 49 Germany
// +49 Germany
// +41 Switzerland
// +44 Great Britain
// +1 USA
```

### Using Object methods

#### Object.keys

Object.keys returns an array of the object's own string key property names.

```js
let countryCodes = {
  49: "Germany",
  41: "Switzerland",
  44: "Great Britain",
  1: "USA",
};

const ans = Object.keys(countryCodes);
console.log(ans); // [ '1', '41', '44', '49' ]
```

#### Object.values

Object.values returns an array of the object's own values.

```js
let countryCodes = {
  49: "Germany",
  41: "Switzerland",
  44: "Great Britain",
  1: "USA",
};

const ans = Object.values(countryCodes);
console.log(ans); // [ 'USA', 'Switzerland', 'Great Britain', 'Germany' ]
```

#### Object.entries

Object.entries returns an array of arrays where the first value in the nested array is a given key and the second value in the nested array is its corresponding value.

```js
let countryCodes = {
  49: "Germany",
  41: "Switzerland",
  44: "Great Britain",
  1: "USA",
};

const ans = Object.entries(countryCodes);
console.log(ans);
// [
//   [ '1', 'USA' ],
//   [ '41', 'Switzerland' ],
//   [ '44', 'Great Britain' ],
//   [ '49', 'Germany' ]
// ]
```

---

## Relevant Links

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors
- https://medium.com/front-end-weekly/understanding-pass-by-value-and-pass-by-reference-in-javascript-8e2a0806b175
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects#defining_methods
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
