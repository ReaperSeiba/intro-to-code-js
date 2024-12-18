/**
 * fetchMultipleUsers
 *
 * The `fetchMultipleUsers` function takes an array of user IDs and retrieves the user data for each. To do this, you will define a helper function, `fetchUser`, to call within `fetchMultipleUsers` function body.
 *
 * `fetchMultipleUsers` should return a single data object containing:
 * - `successful`: an array of all the successfully fetched data objects
 * - `failed`: an array of all the `userId` that failed their fetch
 *
 * HINT:
 * Even though you're processing the results of the `userIds` in the input array, remember that each fetch is its own individual thing.
 *
 * BONUS:
 * Write `fetchMultipleUsers` WITHOUT using any kind of for-loop.
 */

/**
 * `fetchUser` accepts a `userId`. It returns an object on a successful fetch, and an Error message `Failed to fetch user with ID: ${userId}` on a failure.
 *
 * `fetchUser` should send a `GET` request to `https://jsonplaceholder.typicode.com/users/${userId}`, where `userId` is a single user id found within the `userIds` array. The fetch call should also have the following headers:
 * - an Authorization header with value `Bearer fake123fake456fake789`
 * - Content-Type and Accept headers with value `"application/json"`
 *
 * @category 08 - Async/Await & APIs
 * @function fetchUser
 * @param {number} userId - The ID of the user to fetch.
 * @returns {Promise<Object | Error>} Resolves with a data object on successful fetch, and an Error on a failed one.
 * @example
 * // Success
 * const userData = await fetchUser(1);
 * //=> { id: 1, name: "Leanne Graham" }
 *
 * @example
 * // Failure
 * const userData = await fetchUser(99);
 * // Error: `Failed to fetch user with ID: 99`
 */
//using an array of user Ids fed to a helper function 'fetchUser' fetchMultipleUsers will return a data object containing successful[dataObjs] and failed[userIds]

//fetchUser accepts "userId" and returns Obj on success and "Failed to fetch user with Id: ${userId}" on failure
//fetchUser will use a fetch(url, GET) request to the specified url
//fetch call will have headers
// - an Authorization header with value `Bearer fake123fake456fake789`
//  * - Content-Type and Accept headers with value `"application/json"`

export const fetchUser = (userId) => {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer fake123fake456fake789`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((response) => {
      // handle the response and use .json to parse the response to later return the data in proper format
      return response.json();
    })
    .then((data) => {
      console.log(data); //check to make sure data is parsed and returned correclty
      return data;
    })
    .catch(() => {
      // handle any errors by returning an error message
      return `Failed to fetch user with Id: ${userId}`;
    });
};

// Using try/catch & async/await
// export const fetchUser = async (userId) => {
//   try {
//     const response = await fetch(
//       `https://jsonplaceholder.typicode.com/users/${userId}`,
//       {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer fake123fake456fake789`,
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//       }
//     );

//     if (!response.ok)
//       throw new Error(`Failed to fetch user with ID: ${userId}`);

//     return await response.json();
//   } catch (err) {
//     console.error(err);
//   }
// };

/**
 * @category 08 - Async/Await & APIs
 * @function fetchMultipleUsers
 * @param {number[]} userIds - An array of user IDs.
 * @returns {Promise<{successful: object[], failed: number[]}>} - Resolves with an object containing two arrays:
 *  - `successful`: An array of user objects that were fetched successfully.
 *  - `failed`: An array of user IDs that failed to fetch.
 *
 * @example
 * // Mixed successes:
 * const result = await fetchMultipleUsers([ 1, 2, 3 ]);
 * // {
 * //   successful: [
 * //     { id: 1, ... },
 * //     { id: 2, ... }
 * //   ],
 * //   failed: [ 3 ]
 * // }
 *
 * @example
 * // If all requests fail:
 * const result = await fetchMultipleUsers([ 5, 6 ]);
 * // {
 * //   successful: [],
 * //   failed: [ 5, 6 ]
 * // }
 */
// using helper function resolve with an object comprised of information returned by the array of userIds
//resolve with an object containing two arrays successful and failed
//with for loop... promise.all to await all promises needed from fetchUser?
//without for loop = recursive? fetchMultipleUsers could call itself after each iteration of userIds in the array

export const fetchMultipleUsers = (userIds) => {
  const userData = { successful: [], failed: [] }; // stores eventual data for the successful and failed user Fetches
  const promises = []; // holds promises to use Promise.all as return

  for (const user of userIds) {
    promises.push(
      fetchUser(user) // allows storing of fetchUser promise
        .then((currentUser) => {
          if (typeof currentUser === "object") {
            userData.successful.push(currentUser); // Add to successful if it is an object
          } else {
            userData.failed.push(user); // Add to failed if it is not an object
          }
        })
        .catch(() => {
          console.log("fetchUser function failed for user:", user); // If fetch helper function fails we add failed user id anyway
          userData.failed.push(user);
        })
    );
  }

  return Promise.all(promises).then(() => userData); // Promise.all waits for all promises to resolve .then returns userData object from each fulfilled promise
};

// Single for...of loop
// export const fetchMultipleUsers = async (userIds) => {
//   const results = {
//     successful: [],
//     failed: [],
//   };

//   for (const userId of userIds) {
//     try {
//       const user = await fetchUser(userId);
//       results.successful.push(user);
//     } catch (error) {
//       results.failed.push(userId);
//     }
//   }

//   return results;
// };

// Using map and two filter calls
// export const fetchMultipleUsers = async (userIds) => {
//   const results = await Promise.allSettled(
//     userIds.map((userId) =>
//       fetchUser(userId)
//         .then((userData) => ({ status: "fulfilled", value: userData }))
//         .catch(() => ({ status: "rejected", userId }))
//     )
//   );

//   const successful = results
//     .filter((result) => result.status === "fulfilled")
//     .map((result) => result.value);

//   const failed = results
//     .filter((result) => result.status === "rejected")
//     .map((result) => result.userId);

//   return { successful, failed };
// };

// Uncommented one-liner
// export const fetchMultipleUsers = async (userIds, fetchUser) =>
//   (await Promise.allSettled(userIds.map(fetchUser))).reduce(
//     (acc, result, idx) => (
//       result.status === "fulfilled"
//         ? acc.successful.push(result.value)
//         : acc.failed.push(userIds[idx]),
//       acc
//     ),
//     { successful: [], failed: [] }
//   );

// Commented one-liner
// export const fetchMultipleUsers = async (userIds) =>
//   // Step 1: Use Promise.allSettled to get the status of all fetchUser Promises
//   (await Promise.allSettled(userIds.map(fetchUser)))
//     // Step 2: Use reduce to iterate through the results and accumulate successful and failed tasks
//     .reduce(
//       (acc, result, idx) => (
//         // Step 3: Check if the current result's status is "fulfilled"
//         result.status === "fulfilled"
//           ? // If fulfilled, push the resolved value (user data) to the "successful" array
//             acc.successful.push(result.value)
//           : // If rejected, push the user ID (from the original array) to the "failed" array
//             acc.failed.push(userIds[idx]),
//         // Step 4: Return the updated accumulator object in each iteration
//         acc
//       ),
//       // Step 5: Initialize the accumulator with two empty arrays: "successful" and "failed"
//       { successful: [], failed: [] }
//     );

// //bonus attempt using recursion (didnt work) ****** note to future self for a 2nd attempt, after figuring out promise.all
// usecase for the for of solution it might be possible to do a similar storing of promises to ensure everything resolves at the right time
// export const fetchMultipleUsers = (
//   userIds,
//   index = 0,
//   usersData = { successful: [], failed: [] }
// ) => {
//   if (index >= userIds.length) {
//     return usersData; //promises.all here maybe??
//   }
//   return fetchUser(userIds[index])
//     .then((user) => {
//       if (user.id) {
//         // prevent strings from being put into successful
//         return usersData.successful.push(user);
//       } else {
//         return usersData.failed.push(userIds[index]);
//       }
//     })
//     .catch(() => {
//       //might not be necessary? fetchUser itself shouldn't fail
//       return usersData.failed.push(userIds[index]);
//     })
//     .finally(() => {
//       return fetchMultipleUsers(userIds, index + 1, usersData);
//     });
// };
