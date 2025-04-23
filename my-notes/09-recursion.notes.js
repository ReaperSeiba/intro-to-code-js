// function recursionTest() {
//   console.log("Banananananana");
//   recursionTest();
// }

// recursionTest();
// countToFive(1);
// function countToFive(startingPoint) {
//   for (; startingPoint <= 5; startingPoint++) {
//     console.log(startingPoint);
//   }
// }

// What's base case aka when do we stop?
// Stops when startingPoint is = to 5

// What is the recursive case?
// While startingPoint is less than 5

// What are we doing to eventually get to a base case?
// startingPoint is iterated after every check that is determined to be a recursive case until the check reaches the base case
// countToFiveRecursive(0);
// function countToFiveRecursive(start) {
//   // Assume start is always less than 5
//   if (start < 5) {
//     console.log(start);
//     start++;
//     countToFiveRecursive(start);
//   } else {
//     console.log(start);
//   }
//   return;
// }

// function countToFiveRecursive(n) {
//   console.log(n);
//   if (n < 5) {
//     countToFiveRecursive(n + 1);
//   }
// }
// countToFiveRecursive(0)
// 0 -> log 0 -> 0 < 5 -> next call with (0+1)
// 1 -> log 1 -> 1 < 5 -> next call with (1+1)
// 2 -> log 2 -> 2 < 5 -> next call with (2+1)
// 3 -> log 3 -> 3 < 5 -> next call with (3+1)
// 4 -> log 4 -> 4 < 5 -> next call with (4+1)
// 5 -> log 5 -> 5 < 5 -> NO CALL

// console.log(reverseStr("hello"));
// function reverseStr(str) {
//   let newStr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     newStr += str[i];
//   }
//   return newStr;
// }

// What's base case aka when do we stop?
// The base case is when the recursive loop has removed the final character from the original string
// What is the recursive case?
// While the starting string has remaining characters continue recursion to remove them one at a time
// What are we doing to eventually get to a base case?
// building a new string from the last character of the input string until the original string has reached 0 characters
// console.log(recursiveReverseStr("meow"));

// function recursiveReverseStr(str) {
//   if (str.length === 0) {
//     return "";
//   }
//   let stringIndex = str.length - 1;
//   return str[stringIndex] + recursiveReverseStr(str.slice(0, -1));
// }

// function countToFive(start) {
//   if (start <= 5) {
//     console.log(start);
//   } else {
//     return;
//   }
//   countToFive(start + 1);
// }

function countToFive(n) {
  // Base case: when we stop recursing/begin resolving
  if (n > 5) return;

  console.log(n);
  countToFive(n + 1);
}

console.log(countToFive(0));
