// console.log("A");
// console.log("B");
// const result = longWaitTime();
// console.log("Result", result);
// console.log("End");

// function longWaitTime() {
//   for (let i = 0; i < 12345678900; i++) {}
//   console.log("Done");
//   return "this is result";
// }

// console.log("Start");

// setTimeout(() => {
//   console.log("Task B done (after 5 seconds)");
// }, 5000);

// console.log("Task C done");

// console.log("Start");

// const data = await fetchData(); // without an await, this simply returns Promise {'pending'}

// console.log("Data:", data); // what prints for data here
// console.log("End");

// async function fetchData() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
//   return await response.json();
// }

// function fetchUser(userId, callback) {
//   setTimeout(() => {
//     console.log("Fetched user:", userId);
//     callback({ id: userId, name: "John Doe" });
//   }, 1000);
// }

// function fetchPosts(userId, callback) {
//   setTimeout(() => {
//     console.log("Fetched posts for user:", userId);
//     callback([
//       { id: 1, title: "Post 1" },
//       { id: 2, title: "Post 2" },
//     ]);
//   }, 1000);
// }

// function fetchComments(postId, callback) {
//   setTimeout(() => {
//     console.log("Fetched comments for post:", postId);
//     callback([
//       { id: 101, text: "Great post!" },
//       { id: 102, text: "Thanks for sharing!" },
//     ]);
//   }, 1000);
// }

// console.log("Starting nested callbacks...");

// fetchUser(1, (user) => {
//   console.log("User data:", user);

//   fetchPosts(user.id, (posts) => {
//     console.log("User's posts:", posts);

//     fetchComments(posts[0].id, (comments) => {
//       console.log("Comments for first post:", comments);

//       fetchUser(2, (anotherUser) => {
//         console.log("Another user fetched:", anotherUser);

//         fetchPosts(anotherUser.id, (anotherPosts) => {
//           console.log("Posts for another user:", anotherPosts);

//           fetchComments(anotherPosts[1].id, (anotherComments) => {
//             console.log("Comments for another post:", anotherComments);

//             // Keep nesting callbacks, it becomes a pyramid of doom!
//           });
//         });
//       });
//     });
//   });
// });

// const asyncThing = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const success = Math.random() > 0.5;

//     if (success) {
//       resolve("Data received");
//     }
//     reject("Banana pizza");
//   }, 2000);
// });

// asyncThing
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error))
//   .finally(() => console.log("All Done"));

// const getTestScore = new Promise((yes, no) => {
//   setTimeout(() => {
//     const passed = Math.random() > 0.65;

//     if (passed) {
//       yes("You passed");
//     }
//     no("Study harder dumdum");
//   }, 3000);
// });

// getTestScore
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error))
//   .finally(() => {
//     console.log("You're grounded forever");
//   });

// const getNumber = new Promise((pass, _) => {
//   setTimeout(() => {
//     const n = Math.round(Math.random() * 10);
//     pass(n);
//   }, 3000);
// });

// const result = getNumber
//   .then((num) => {
//     console.log("Multiply num by 5");
//     console.log(num * 5);
//     return num * 5;
//   })
//   .then((num2) => {
//     console.log("Adding 10 to num2");
//     console.log(num2 + 10);
//     return num2 + 10;
//   })
//   .then((num3) => {
//     console.log("Subtract 7 from num3");
//     console.log(num3 - 7);
//     return num3 - 7;
//   });

// console.log(result);

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
