- Variable - named container for a stored value
- Value - data stored in a variable (every data has a type)

### VALUES AND DATA TYPES
- string: any data wrapped in quotes
  - single quote ', const myLeastFavFood = 'Fish' 
  - double quote ", const myDogsName = "Hudson"
  - backtick `` (Fn+Esc), const myOshi = `Vesper`
- number
- boolean
- null is intentionally valueless
- undefined - no reference,  variable has -  been declared but is not assigned a value

### DATA STRUCTURES
- Object
- Array

### KEYWORDS
- Special reserved words that  trigger certain actions in javascript.
- Examples: Declare variables/functions. 

### VARIABLES

let - declares a variable that can be reassigned.
const - READ ONLY and must be assigned a value
var - similar to let but it's global

```js
let myNum = 2
const myName = "Tyler"
```

### Outputting stuff to the console

- `console.log` is a dot-method off of `Console` that outputs a message to the console.

### dot-methods

Dot methods are built in functions provided to the user by javascript. A programmer can also create their own dot methods off of objects if they like. `console.log` is an example of a dot method.

### String Interpolation

We can use variables and their values in strings by using backticks (``) and interpolation variable syntax, `${}`, to combine data types into a string output.


```js
const num = 5

// Without string interpolation
const noInterpolation = 'Hi my name is Tyler and I have '
const noInterpolationTheSequel = ' dollars in my pockets.'

const otherWay = 'Hi my name is Tyler and I have ' + num + ' dollars in my pockets.' 

console.log(noInterpolation + num  + noInterpolationTheSequel)
console.log(otherWay)

// With string interpolation
const myWallet = `Hi my name is Christian and I have ${num} dollars in my pockets.`
```

### Math, speedrun edition

Basic math operators are present here:
- addition: +
- subtraction: -
- division: /
- multiplication: *

There are also some additional operators that are very useful

- Exponentiation (raise num to power): **
- Modulo (remainder): %

```js
const whatIsMath = 3 ** 3 // 27
const mathAgain = 27 % 5 // 2
```

### Types, and where to find them

To determine the type of a specific data you can use the `typeof` operator.
The type of the data examined will always be returned as a string. 

