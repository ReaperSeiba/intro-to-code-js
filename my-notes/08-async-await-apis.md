# Async/Await & APIs

## 1. Introduction to Asynchronous JavaScript

**What is synchronous code?**

- The default way JS runs is by handling one thing at a time in a linear fashion. Each line of code waits for the previous line to finish before moving forward.

```
// Synchronous Example (Pseudo Code)
1. Do task A
2. Do task B (long time to finish)
3. Do task C
```

in real JS:

```js
console.log("A");
console.log("B");
const result = longWaitTime();
console.log("Result", result);
console.log("End");

function longWaitTime() {
  for (let i = 0; i < 12345678900; i++) {}
  console.log("Done");
  return "this is result";
}
```

**What is asynchronous code?**

```
// Asynchronous Example (Pseudo Code)
1. Do task A
2. Start task B (async) and continue
3. Do task C
4. When task B finishes, process the result
```

in real JS:

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Task B done (after 5 seconds)");
}, 5000); // Simulate async task with setTimeout

console.log("Task C done");
```

Examples of async code:

- Fetch data information from API endpoints (wait for a response)
- Timeouts or intervals

### What Happens When You Use Asynchronous Code Synchronously?

#### Example

```javascript
console.log("Start");

const data = await fetchData(); // without an await, this simply returns Promise {'pending'}

console.log("Data:", data); // what prints for data here
console.log("End");

async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  return await response.json();
}
```

### Callbacks: How They're Used with Asynchronous Code

Callback is a function you pass to another function.

```javascript
function fetchData(callback) {
  setTimeout(() => {
    const data = { name: "Alice", age: 25 };
    callback(data); // The callback is called when data is ready
  }, 2000);
}

fetchData((data) => {
  console.log("Data received:", data);
});
```

---

### Callback Hell

Example of a micro-hell:

```javascript
getData((data) => {
  processData(data, (result) => {
    saveResult(result, (response) => {
      console.log("All done!");
    });
  });
});
```

Example of a more sizeable hell:

```js
function fetchUser(userId, callback) {
  setTimeout(() => {
    console.log("Fetched user:", userId);
    callback({ id: userId, name: "John Doe" });
  }, 1000);
}

function fetchPosts(userId, callback) {
  setTimeout(() => {
    console.log("Fetched posts for user:", userId);
    callback([
      { id: 1, title: "Post 1" },
      { id: 2, title: "Post 2" },
    ]);
  }, 1000);
}

function fetchComments(postId, callback) {
  setTimeout(() => {
    console.log("Fetched comments for post:", postId);
    callback([
      { id: 101, text: "Great post!" },
      { id: 102, text: "Thanks for sharing!" },
    ]);
  }, 1000);
}

console.log("Starting nested callbacks...");

fetchUser(1, (user) => {
  console.log("User data:", user);

  fetchPosts(user.id, (posts) => {
    console.log("User's posts:", posts);

    fetchComments(posts[0].id, (comments) => {
      console.log("Comments for first post:", comments);

      fetchUser(2, (anotherUser) => {
        console.log("Another user fetched:", anotherUser);

        fetchPosts(anotherUser.id, (anotherPosts) => {
          console.log("Posts for another user:", anotherPosts);

          fetchComments(anotherPosts[1].id, (anotherComments) => {
            console.log("Comments for another post:", anotherComments);

            // Keep nesting callbacks, it becomes a pyramid of doom!
          });
        });
      });
    });
  });
});
```

### Summary

- Synchronous code: Code executed in a linear method, line by line.
- Asynchronous code: Code that can be executed in the background; allows other code to run in meanwhile.
- Callbacks: Callbacks were functions paired with an Timeout within a function in order to execute after receiving data.

## 2. Promises in JavaScript

**What is a Promise?**

A Promise is an object that represents the eventual completion, pass or fail, of an async operation.

A Promise has three possible states:

1. Pending - Initial state and implies that the async operation has not yet completed.
2. Fulfilled - The operation has completed successfully, and the promise has a result.
3. Rejected - The operation has failed and the promise holds an error.

A Promise transitions from pending to one of the other states only when the async operation finishes.

### Basic Structure of a Promise

- A Promise is created using resolve and a reject callback functions.

  - `resolve`: Call this when the operation succeeds.
  - `reject`: Call this when the operation fails.

- The `fetchData` Promise takes 2 seconds to complete (using `setTimeout`).
- If `success` is `true`, it calls `resolve` with a message (`'Data received'`).
- If `success` is `false`, it calls `reject` with an error message (`'Error occurred'`).

Now, to handle the result of the Promise, you use the following methods: `then`, `catch`, and `finally`.

#### Thenables: Handling Promises

To handle the result of a Promise you use the following methods:

1. .then() - is used to handle the result of a fulfilled promise.

   ```javascript
   fetchData.then((result) => {
     console.log(result); // Output: 'Data received' after 2 seconds
   });
   ```

2. .catch() - handles the error if the promise is rejected.

   ```javascript
   fetchData.catch((error) => {
     console.log(error); // Output: 'Error occurred' if rejected
   });
   ```

3. .finally() - executed regardless whether the Promise was fulfilled or rejected.

   ```javascript
   fetchData.finally(() => {
     console.log("Operation complete"); // Runs no matter what
   });
   ```

### Example usage with a Promise

```js
const getTestScore = new Promise((yes, no) => {
  setTimeout(() => {
    const passed = Math.random() > 0.65;

    if (passed) {
      yes("You passed");
    }
    no("Study harder dumdum");
  }, 3000);
});

getTestScore
  .then((result) => console.log(result))
  .catch((error) => console.error(error))
  .finally(() => {
    console.log("You're grounded forever");
  });
```

In this example:

- The Promise has a **65% chance of success** (using `Math.random()`).
- If successful, the `then()` block runs and logs the result.
- If it fails, the `catch()` block runs and logs the error.
- The `finally()` block always runs after the Promise settles, regardless of the outcome.

### Promise .then() Chaining

```js
const getNumber = new Promise((pass, _) => {
  setTimeout(() => {
    const n = Math.round(Math.random() * 10);
    pass(n);
  }, 3000);
});

const result = getNumber
  .then((num) => {
    console.log("Multiply num by 5");
    console.log(num * 5);
    return num * 5;
  })
  .then((num2) => {
    console.log("Adding 10 to num2");
    console.log(num2 + 10);
    return num2 + 10;
  })
  .then((num3) => {
    console.log("Subtract 7 from num3");
    console.log(num3 - 7);
    return num3 - 7;
  });

console.log(result);
```

You can chain any number of .then() calls together before adding a .catch() or an optional .finally().

The benefits of using promises are that it allows you to better see the order of your operations, simplify your error handling, and setup sequential functionality.

## Using Async/Await with real-world data

Async/Await provides a more readable and concise way to work with asynchronous code by using a synchronous-looking syntax. It is built ontop of promises, meaning that you can handle Async operations without deeply nesting .then() and .catch() calls.

### Basic Syntax of `async` with `.then()`

```javascript
async function fetchData(postNum) {
  const data = fetch(
    `https://jsonplaceholder.typicode.com/posts/${postNum}`
  ).then((res) => res.json());
  return data;
}

fetchData(10).then((res) => console.log(res));
```

Our fetchData function is declared using the async keyword.

It returns a Promise of a Response.

Then we parse the Response using the built-in `.json()` method.

### Async with Await

Await pauses the execution until a Promise is resolved. You can only use the await keyword inside of a async function.

When the Promise is resolved await gives you the resolved value and makes your code appear synchrounous.

```js
async function fetchData(postNum) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postNum}`
  );
  const data = await response.json();
  return data;
}

(async function () {
  const result = await fetchData(10);
  console.log(result);
})();
// IIFE - immediately invoked function expression
```
