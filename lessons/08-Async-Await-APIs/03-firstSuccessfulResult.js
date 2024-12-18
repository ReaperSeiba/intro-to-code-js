/**
 * firstSuccessfulResult
 *
 * `firstSuccessfulResult` accepts an array of promises and returns a promise that resolves with the result of the first successfully resolved promise.
 * If all promises fail, `firstSuccessfulResult` rejects with the message "All tasks failed."
 *
 * @category 08 - Async/Await & APIs
 * @function firstSuccessfulResult
 * @param {Promise[]} tasks - An array of promises to race.
 * @returns {Promise<string>} - A promise that resolves with the first successful result, or rejects with an error message if all fail.
 *
 * @example
 * const tasks = [
 *  new Promise((_, reject) => setTimeout(() => reject('Error 1'), 200)),
 *  new Promise((resolve) => setTimeout(() => resolve('Success 2'), 300)),
 *  new Promise((_, reject) => setTimeout(() => reject('Error 3'), 400));
 * ]
 *
 * firstSuccessfulResult(tasks)
 *   .then(result => console.log(result)) // Outputs: 'Success 2'
 *   .catch(error => console.error(error));
 */
//Given an array of promises "tasks"
//firstSuccessfulResult must return a promise that resolves with the result of the first successful promise in the array, iterate through the array
//if all promises fail reject with "All tasks failed."

//NOTE For loop to iterate through the 'tasks' array may be needed * Couldn't get this to work

//NOTE promises to race? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race potentially using this iterative method for Promise? * Couldnt get this to work because it works whether fulfilled or rejected

//NOTE https://sliceofdev.com/posts/promises-with-loops-and-array-methods-in-javascript - For each loop attempt * Couldnt get to work because promises were pending.

//NOTE https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any - Promise.any() attempt | Should resolve on first successful and fail on all rejections

export const firstSuccessfulResult = (tasks) => {
  return Promise.any(tasks) //Promise.any resolves on the first successful promise out of an array of promises
    .then((result) => {
      //.then is only executed upon fulfillment
      console.log(result);
      return result;
    })
    .catch(() => {
      //.catch is only executed upon rejection
      console.log("All tasks failed.");
    })
    .finally(() => {
      console.log("All tasks completed"); //.finally is executed regardless of fulfillment or rejection
    });
};

// Using try/catch/finally
// export const firstSuccessfulResult = async (tasks) => {
//   try {
//     return await Promise.any(tasks);
//   } catch (error) {
//     throw new Error("All tasks failed");
//   } finally {
//     console.log("All tasks completed");
//   }
// };
