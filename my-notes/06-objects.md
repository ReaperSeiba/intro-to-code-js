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
  - [Object mutation (assigning values to an object/sub-object)](#object-mutation-assigning-values-to-an-objectsub-object)
    - [Note on nested assignment](#note-on-nested-assignment)
  - [Removing properties](#removing-properties)
  - [PBR vs PBV: Object edition](#pbr-vs-pbv-object-edition)
  - [Methods: Object functions](#methods-object-functions)
    - [Method Shorthand](#method-shorthand)
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

---

## Relevant Links

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors
- https://medium.com/front-end-weekly/understanding-pass-by-value-and-pass-by-reference-in-javascript-8e2a0806b175
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects#defining_methods
