# Arrays

## WTF is an array?

- Arrays are a general collection type in JS.
- Arrays are of `object` data type.
- They are like strings in that they are a sequence of values that can be accessed via an ordered index.
- They are unlike strings in that they can store data of any type.
- They allow you to collect multiple items under a single variable name.

## Declaring an array

- [] is an empty array
- You can seperate elements of an array using a comma

```js
const emptyArr = [];

let programmingLanguages = [
  "JS",
  "C#",
  "Lua",
  "Ruby",
  "C++",
  "Assembly",
  "C",
  "Java",
];
```

## Array Properties

- You can do `.length` off an array.

## Bracket Notation and Index

- Arrays in JS are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on
- You can access a value in an array by combining the array variable name with a bracket containing the numerical index you want.

```js
const favoriteFoods = ["steak", "pizza", "sushi", "french fries", "ribs"];

console.log(favoriteFoods[3]); // french fries

// What happens when you reference an invalid array index?
console.log(favoriteFoods[69420]); // undefined
```

## Memory: Pass By Value vs Pass By Reference

- JS is primarily a 'Pass By Value' language

### Pass by Value

- When a variable is assigned to a new variable, the value stored in the old variable is copied into the new variable.

```js
let x = 10; // assign 10 to x
let y = x; // assign y the value x has stored

x = 50; // x is let-declared; re-assign to 50

console.log(x); // 50
console.log(y); // 10
```

### Pass by Reference

- When dealing with objects, including arrays and functions, JS uses 'Pass By Reference'.
- When an object is created in JS, it is stored in a memory space, and the variable associated stores the memory address AKA reference where the object is stored.
- If you assign this object variable to another variable, it does not copy the object, but rather the reference to the object. This mean that both variables now point to the same memory space.

```js
let obj1 = { val: 8008 };
let obj2 = obj1;

console.log(obj1.value); // 8008
console.log(obj2.value); // 8008
```

### Array (and object data type) declarations

Should you use `let` or `const` for arrays/objects/functions?

- `const` for all
  - When you're adding to an array or object you're not reassigning or redeclaring the constant.
  - You're just adding to the list of elements or properties to which the constant points.

### Multi-dimensional arrays

- A multi dimensional array is an array of arrays.
- There is an outer array that contains inner arrays as primary elements within.
- These inner arrays can store values such as strings, numbers, or even other arrays.

```js
// 2x2 2d array
const basic2dArr = [
  [1, 2],
  [3, 4],
];
```

#### Can you have uneven 2d arrays i.e. NOT 2x2, 3x3, 4x4?

```js
// 3x4 2d array
let threeByFour = [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 0, 0],
];

let actuallyUneven = [
  [0, 1, 2, 3],
  [8, 9],
  [4, 5, 6, 7],
];
```

#### Use Cases

```js
// combining existing arrays into one
let student1 = ["Jack", 24];
let student2 = ["Sara", 23];
let student3 = ["Peter", 24];

let studentsData = [student1, student2, student3]; // [['Jack', 24], ['Sara', 23], ['Peter', 24]];
```

### Spread syntax

- Spread syntax is three periods before a variable name, `...someVar`
- Spread syntax allows for an iterable, such as an array or a string, to be expanded in places where 0 or more arguments are expected.
- For arrays, spread syntax expands an array into it's elements.
- Spread syntax looks exactly like rest syntax.

```js
// Use spread syntax to spread an array's elements into another array
let student1 = ["Jack", 24];
let student2 = ["Sara", 23];
let student3 = ["Peter", 24];

let allInOneStudentsData = [...student1, ...student2, ...student3]; // ['Jack', 24, 'Sara', 23, ['Peter', 24]];

//
const someParts = ["shoulders", "knees"];
const asLyrics = ["head", ...someParts, "and", "toes"];

console.log(asLyrics); // [head, shoulders, knees, and, toes]
```

### Destructured swapping assignments

```js
let a = 7;
let b = "potato";

// Use a temporary array
[a, b] = [b, a];

// Now the values of a and b are swapped!
console.log(a); // "potato"
console.log(b); // 7
```
