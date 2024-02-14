# Conditionals: Booleans and Equality

- [Conditionals: Booleans and Equality](#conditionals-booleans-and-equality)
  - [WTF is a conditional and why do they matter?](#wtf-is-a-conditional-and-why-do-they-matter)
  - [Equality: Loose vs Strict (always Strict)](#equality-loose-vs-strict-always-strict)
    - [When equal doesn't really mean equal](#when-equal-doesnt-really-mean-equal)
  - [Practical Examples](#practical-examples)
    - [The standalone `if`](#the-standalone-if)
    - [The one-two: `if-else`](#the-one-two-if-else)
    - [Chain 'em together: `else if`](#chain-em-together-else-if)
  - [Equality, the unequal way](#equality-the-unequal-way)
  - [Logic and its friends (not the rapper)](#logic-and-its-friends-not-the-rapper)
    - [Logical practice](#logical-practice)
    - [Nesting practice](#nesting-practice)
  - [Conditionals: asking the right questions](#conditionals-asking-the-right-questions)
  - [Switching things up](#switching-things-up)
    - [Examples](#examples)

## WTF is a conditional and why do they matter?

- Conditionals enable a code segment to conditionally execute things.
- Conditionals allow us to represent decision making in javascript.

## Equality: Loose vs Strict (always Strict)

### When equal doesn't really mean equal

- When using loose equality (`==`), you tell JS to convert both values to the same type BEFORE doing your comparison, which leads to unexpected results.

```js
7 == "7"      // ✅ true
0 == false    // ✅ true
0 == ""       // ✅ true

'0' == 0      // ✅ true
0 == ''       // ✅ true
'0' == ''     // ✅ false
```

- Strict equality (`===`) differs in that it directly compares both values WITHOUT converting their types 

## Practical Examples

### The standalone `if`

```js
let favoriteGame = "Resident Evil"

if (favoriteGame === "Crash Bandicoot") {
  console.log("WOW, great taste.")
}
```

### The one-two: `if-else`

- `if-else` is a standard two-choice flow

- standalone `else` represents the last in a chain of conditional operations.

```js
let foodYouWantRightNow = "Popcorn Shrimp"

if (foodYouWantRightNow === "Popcorn Shrimp") {
  console.log("YEAH, ME TOO!!!!")
} else {
  console.log("Eh, not really in the mood")
}
```

### Chain 'em together: `else if`

- We use `else if` when we want to have more than two conditional flows we want to control.
- You chain `else if` after your `if` statement, and BEFORE your final `else`, if you include an `else` clause

```js
let myNewName = "Evelyn"

if (myNewName === "Cassandra") {
  console.log("Not this one!!")
} else if (myNewName === "Evelyn") {
  console.log("THIS IS THE ONE!")
} else if (myNewName === "Alma") {
  console.log("Not this one!!!")
} else {
  console.log("HUH?")
}
```

## Equality, the unequal way

- Because we're only using STRICT equality, we also want to use STRICT inequality.
- To measure inequality, we use `!==`

```js
let myNewName = "Evelyn"

if (myNewName !== "Evelyn") {
  console.log("THIS IS THE WRONG NAME")
} else {
  console.log("THIS IS THE ONE!")
}
```

## Logic and its friends (not the rapper)

- We can borrow the first set of logical comparative operators from math.

```
GT    >
GTE   >=
LT    <
LTE   <=
```

- The next set are logical boolean operators.

```
AND   &&
OR    ||
NOT   !     negation
```

### Logical practice

Order of operations:
  - Logical NOT
  - Exponents
  - Mult/Div
  - Add/Sub
  - Numerical comparisons
  - logical comparisons, AND before OR

```js
4 < 3 || 2 < 3              // true
5*3 > 10 && 4 + 6 === 11    // false
```

### Nesting practice

```js
let num = 7;

if (num % 2 === 0) {
  if (num % 2 === 1) {
    console.log("odd");
  }
}
// Does 'odd' print?
// > NO

// What values for `num` would cause 'odd' to print?
// > No, because a number cannot both be odd and even
```

## Conditionals: asking the right questions

- There's a way to conditional evaluations inline with a statement of some kind.

- This inline operator is called the ternary, (`?`)

```js
// Usage structure
// conditional expression ? true expression : false expression

const condition = 57 > 3

const currentlyWearingPants = condition ? "defo wearing pants" : "freeballing" 

// you COULD (never SHOULD) chain ternaries

function example() {
  return condition1 ? value1
    : condition2 ? value2
    : condition3 ? value3
    : value4;
}

// equivalent to

function example() {
  if (condition1) {
    return value1;
  } else if (condition2) {
    return value2;
  } else if (condition3) {
    return value3;
  } else {
    return value4;
  }
}
```

## Switching things up

- The `switch` statement evaluates an expression, matching the expression's value against a series of `case` clauses.
- You can group differing conditions that should lead to the same using a `switch` clause.

### Examples

**Individual Cases**

```js
const carMake = "Toyota"

switch (carMake) {
  case "Ford":
    return "It's a Ford!"
  case "GM":
    return "It's a GM!"
  case "Chevy":
    return "It's a Chevy!"
  default:
    console.log("Sorry it's not American")
}
```

**Grouped Cases**

```js
const fruit = "pineapple"

switch (fruit) {
  case "Apples":
  case "Pears":
  case "Oranges":
    console.log("Apples, pears, and oranges are all on sale, 2/$1.")
    break; // to get us out of the switch after a match
  case "pineapple":
    console.log("I don't know how much pineapples cost. 2, 3 dollars maybe??")
    break;
  default:
    console.log("Honestly, I'm not even sure that that's a fruit.")
}
```