# Recursion

## WTF is it?

A function is recursive if it calls itself in its own definition.

```js
function recursionTest() {
  console.log("Banananananana");
  recursionTest();
}

recursionTest();
```

### What happens when we run this function?

We get a StackOverflow error:

```
node:internal/console/constructor:315
        if (isStackOverflowError(e))
            ^

RangeError: Maximum call stack size exceeded
    at console.value (node:internal/console/constructor:315:13)
    at console.log (node:internal/console/constructor:386:26)
    at recursionTest (C:\Users\Encla\Programming\intro-to-code-js\my-notes\09-recursion.notes.js:2:11)
    at recursionTest (C:\Users\Encla\Programming\intro-to-code-js\my-notes\09-recursion.notes.js:3:3)
    at recursionTest (C:\Users\Encla\Programming\intro-to-code-js\my-notes\09-recursion.notes.js:3:3)
    at recursionTest (C:\Users\Encla\Programming\intro-to-code-js\my-notes\09-recursion.notes.js:3:3)
    at recursionTest (C:\Users\Encla\Programming\intro-to-code-js\my-notes\09-recursion.notes.js:3:3)
    at recursionTest (C:\Users\Encla\Programming\intro-to-code-js\my-notes\09-recursion.notes.js:3:3)
    at recursionTest (C:\Users\Encla\Programming\intro-to-code-js\my-notes\09-recursion.notes.js:3:3)
    at recursionTest (C:\Users\Encla\Programming\intro-to-code-js\my-notes\09-recursion.notes.js:3:3)
```

It's basically means that the computer you're on has run out of memory to track all recursive calls you've just made.

## What do we need to do to prevent infinite recursive loops?

Give it a stopping point, usually with some form of conditional. This stopping point is also commonly known as the base case (vs the recursive case).

## What is the Call Stack?

The call stack is a stack of calls in order from which they were called.

A call stack is an example of a stack, which is data structure that follows LIFO.

This is in contrast to a queue which is FIFO.

## Counting to Five

We use a for-loop starting from the input number to log each number to 5.

### Iteratively

#### Using all three `for-loop` statements

```js
function countToFiveIteratively(start) {
  // All starts always are less than 5.
  for (let num = start; num <= 5; num++) {
    console.log(num);
  }
}
```

#### Skipping the first `for-loop` statement

```js
function countToFiveIteratively2(start) {
  // All starts always are less than 5.
  for (; start <= 5; start++) {
    console.log(start);
  }
}
```

### Recursively

#### Conditions that create an infinite loop

##### Recursive call without a conditional gate

This function runs infinitely because there is no conditional gate to stop it from running.

```js
function countToFiveRecursive(start) {
  // All nums always are less than 5.
  // Do this recursively.
  if (start <= 5) {
    console.log(start);
  }

  countToFiveRecursive(start); // untouched by conditional, both input and call
}
```

##### Recursive call with unmodified inputs

This function does not modify it inputs in its recursive call. Furthermore, it recursively calls as a conditional, so that means that each call is dependent on the recursive conditional, which never resolves, producing the stack overflow error.

```js
function countToFiveRecursive(start) {
  if (countToFiveRecursive(start) <= 5) {
    console.log(start);
  }
}
```

#### Correct recursive calls

##### `console.log` outside the conditional

Here we log before the comparison to 5, to see if we need to increment the current number for the next call.

```js
// countToFive(1);
function countToFive(startingPoint) {
  for (; startingPoint <= 5; startingPoint++) {
    console.log(startingPoint);
  }
}

function countToFive(start) {
  while (start <= 5) {
    console.log(start);
    start++;
    countToFive(start);
  }
}

// What's base case aka when do we stop?
// Stops when startingPoint is = to 5

// What is the recursive case?
// While startingPoint is less than 5

// What are we doing to eventually get to a base case?
// startingPoint is iterated after every check that is determined to be a recursive case until the check reaches the base case
countToFiveRecursive(0);
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

function countToFiveRecursive(n) {
  console.log(n);
  if (n < 5) {
    countToFiveRecursive(n + 1);
  }
}
// countToFiveRecursive(0)
// 0 -> log 0 -> 0 < 5 -> next call with (0+1)
// 1 -> log 1 -> 1 < 5 -> next call with (1+1)
// 2 -> log 2 -> 2 < 5 -> next call with (2+1)
// 3 -> log 3 -> 3 < 5 -> next call with (3+1)
// 4 -> log 4 -> 4 < 5 -> next call with (4+1)
// 5 -> log 5 -> 5 < 5 -> NO CALL
```

This is an example of an iteratively recursive function; no aggregation.
Here, the recursion serves as an alternative to a loop.

##### `console.log` inside the conditional

```js
function countToFiveRecursive(start) {
  // Recursive calls begin at start.
  // Recursive calls stop when start = 5.

  if (start <= 5) {
    console.log(start);
    countToFiveRecursive(start + 1);
  }

  // countToFiveRecursive(2)
  // 2 -> 2 <= 5 -> log num -> next call 3
  // 3 -> 3 <= 5 -> log num -> next call 4
  // 4 -> 4 <= 5 -> log num -> next call 5
  // 5 -> 5 <= 5 -> log num -> next call 6
  // 6 -> 6 !<=5 -> no log, no next call
}
```

## Reversing a string

### Most direct method

Using `.reverse()`.

```js
function reverseStrDirect(str) {
  return str.reverse;
}
```

### Iteratively

```js
function reverseStrIterative(str) {
  // Create str to collect characters in reverse
  let result = "";
  // loop through string from back to front
  for (let i = str.length - 1; i >= 0; i--) {
    // grab and add char to result
    let currChar = str[i];
    result += currChar;
  }
  // loop done; return reversed string
  return result;
}

console.log(reverseStrIterative("cartoon")); // => "nootrac"
```

### Recursively

```js
function revStrRecursive(str) {
  // Base Case: when does it stop
  // We want to keep grabbing the last char off str
  // If we keep removing last char from str,
  // what will str eventually become?
  if (str.length === 0) {
    return "";
  }
  // Recursion
  // - Remove the current last char from str
  // - recursive on remaining string

  const lastCharIndex = str.length - 1;

  // add the last char of current string to the .slice current string from 1st index, excluding the last index
  return str[lastCharIndex] + revStrRecursive(str.slice(0, -1));
}

console.log(revStrRecursive("cat")); // => "tac"
```

#### Call stack illustration

Abbreviating `revStrRecursive` as `rsr`

```
rsr("hello")
  => "o" + rsr("hell")
    => "l" + rsr("hel")
      => "l" + rsr("he")
        => "e" + rsr("h")
          => "h" + rsr("")
            => ""  BASE CASE ARRIVAL
          => "h" + ""
        => "e" + "h"
      => "l" + "eh"
    => "l" + "leh"
  => "o" + "lleh"
=> "olleh"
```

##### As a plate of pancakes

```
rsr("hello")
------
answer
```

the next call added is:

```
rsr("hell")
rsr("hello")
------
answer
```

the next call added is:

```
rsr("hel")
rsr("hell")
rsr("hello")
------
answer
```

This continues until the empty string case, where it looks as follows:

```
rsr("") => hit the base case, no more recursive call, only value returned
rsr("h")
rsr("he")
rsr("hel")
rsr("hell")
rsr("hello")
------
answer
```

To resolve all the calls on the stack, you must go from top-most to bottom.
