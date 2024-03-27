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

const someFunc = () => console.log("It's been 5 seconds");

setTimeout(someFunc, 5000);

function addTwoNumsTimesX(fn, a, b, x) {
  return fn(a, b) * x;
}

console.log(addTwoNumsTimesX(addTwoNums, 22, 11, 5));
