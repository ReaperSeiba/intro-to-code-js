const myString = "Hello World my name is Tyler "
// console.log(myString + myString)
// console.log("Put it in directly, no variable", "multiple if you wanted", 242424)

const num = 5

// Without string interpolation
const noInterpolation = 'Hi my name is Tyler and I have '
const noInterpolationTheSequel = ' dollars in my pockets.'

const otherWay = 'Hi my name is Tyler and I have ' + num + ' dollars in my pockets.' 

// console.log(noInterpolation + num  + noInterpolationTheSequel)
// console.log(otherWay)

const mightBeNum = "number"
const actuallyNum = 42
const wordOrNum = "lol"

console.log(typeof typeof mightBeNum, typeof typeof actuallyNum, typeof typeof wordOrNum, typeof {}, typeof 420)