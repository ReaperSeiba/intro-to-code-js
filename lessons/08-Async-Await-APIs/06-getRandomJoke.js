/**
 * getRandomJoke
 *
 * `getRandomJoke` fetches a random joke from the Official Joke API.
 * `getRandomJoke` retrieves the joke's setup and punchline if the request is successful.
 * If the request fails, it returns an error message of "Failed to fetch joke" instead.
 *
 * The Official Joke API: https://official-joke-api.appspot.com/random_joke
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch MDN - Using Fetch API}
 *
 * @category 08 - Async/Await & APIs
 * @function getRandomJoke
 * @returns {Promise<Object|string>} A Promise that resolves to an object containing the joke data (`{ setup: string, punchline: string }`) or a string with an error message.
 *
 * @example
 * // Successful fetch
 * const joke = await getRandomJoke();
 * // joke: { setup: "Why don't skeletons fight each other?", punchline: "They don't have the guts." }
 *
 * @example
 * // Failed fetch
 * const joke = await getRandomJoke();
 * // joke: "Failed to fetch joke"
 */
//fetches a random joke from API
//retrieve joke setup/punchline if success, return error of "Failed to fetch joke" if rejected
export const getRandomJoke = () => {
  return fetch("https://official-joke-api.appspot.com/random_joke")
    .then((response) => {
      // handle the response and use .json to parse the response to return the data in proper format
      return response.json();
    })
    .catch(() => {
      // handle any errors by returning an error message
      return "Failed to fetch joke";
    });
};

// Using try/catch & async/await
// export const getRandomJoke = async () => {
//   try {
//     const response = await fetch(
//       "https://official-joke-api.appspot.com/random_joke"
//     );

//     if (!response.ok) {
//       return "Failed to fetch joke";
//     }

//     const joke = await response.json();
//     return joke;
//   } catch (error) {
//     return "Failed to fetch joke";
//   }
// };
