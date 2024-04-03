function stuff() {
  console.log("this is a function");
}

// console.log(stuff.toString());
// console.log(stuff.name);

// a and b are params, 2 params
function twoSum(a, b) {
  return a + b;
}

// Define a function allSum, where you can pass as many nums
// as you want, and the function returns their sum
function allSum() {
  console.log(arguments);

  let total = 0;
  for (const hamSammich of arguments) {
    total += hamSammich;
  }

  // for (let i = 0; i < arguments.length; i++) {
  //   const currArg = arguments[i];
  //   console.log(currArg);

  //   total += currArg;
  // }
  return total;
}

// console.log(typeof allSum);

let addTwoNums = function (a, b) {
  return a + b;
};

let otherFunc = addTwoNums;

// 274, 998
// console.log(otherFunc(274, 998));

// const someFunc = () => console.log("It's been 5 seconds");

// setTimeout(someFunc, 5000);

function addTwoNumsTimesX(fn, a, b, x) {
  return fn(a, b) * x;
}

// console.log(addTwoNumsTimesX(addTwoNums, 22, 11, 5));

function operateOnNum(num, cb) {
  console.log(cb(num));
}

function squareNum(x) {
  return x ** 2;
}

// operateOnNum(5, squareNum);

const somePhrase = "The quick brown fox jumped over the lazy dog.";

// using a value
// console.log(somePhrase.replace("fox", "hamster"));

const replacerFn = (matched) => {
  console.log(`Hey look we matched: ${matched}`);
  return "banana";
};

// console.log(somePhrase.replace("fox", replacerFn));

const arr = [-2, -12, 700, 91, 2];

const logger = (val) => console.log(val);

// arr.forEach(logger);

// Define a function addsOne that adds one to the current val.
const addsOne = (val) => val + 1;

// console.log("forEach", arr.forEach(addsOne));
// // [-1, 0, 1, 2, 3];

// console.log("map", arr.map(addsOne));

// console.log("orig", arr);
// // original arr

// Define a function biggerThanZero that tests whether or not a value is greater than 0
const biggerThanZero = (val) => val > 0;

// console.log(arr.filter(biggerThanZero));
// [1, 2]

// Define a callback sortAscending where you want to sort vals in ASC order
const sortAscending = (a, b) => a - b;
// console.log(arr.sort(sortAscending));

// Define a function divByThree that checks returns whether a val is divisible by 3.
const divByThree = (val) => val % 3 === 0;

// console.log(arr.find(divByThree));

// Define cb for reduce where you add the prev val to the current val to add all array vals together.

const easyArr = [1, 2, 3, 4];
const sumArr = (accumulator, currVal) => accumulator + currVal;

// console.log(easyArr.reduce(sumArr, 0));

/**
 *          Accumulator       CurrVal     After Reduction
 * idx 0    0 (initial)       1           0 + 1 = 1
 * idx 1    1 (reduction)     2           1 + 2 = 3
 * idx 2    3                 3           3 + 3 = 6
 * idx 3    6                 4           6 + 4 = 10
 * - no more elements, return 10
 */

// Define a cb isEven that determines whether a num is even

const isEven = (val) => val % 2 === 0;

// console.log(arr.some(isEven));
// console.log(arr.every(isEven));

// Define an inline map callback that uppercases each string in an array
const strs = ["hello", "bye", "banana", "water"];

console.log(strs.map((str) => str.toUpperCase()));

// Define a filter cb that removes all elements from an array with odd indexes.

const arr2 = [6, 7, 8, 9];

// as passed in cb
const removeEvenIdxs = (_, idx) => idx % 2 !== 0;
// console.log(arr2.filter(removeEvenIdxs));

// inline callback fn
// console.log(arr2.filter((_, idx) => idx % 2 !== 0));

// Define a inline filter callback threeOrMore that determines whether the nested arr has more than two elements
const setOfArrs = [[1, 2, 3], [4], [], [6, 7, 8, 9], [10, 11]];

// console.log(setOfArrs.filter((array) => array.length > 2));

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
