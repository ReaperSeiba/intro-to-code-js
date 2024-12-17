import { quotes } from "./data/02-fetchQuotes.data";

/**
 * #2: fetchQuote
 *
 * `fetchQuote` function simulates an asynchronous request to fetch a random motivational quote.
 *
 * `fetchQuote` returns a promise that resolves with a random quote after 350ms.
 * - The promise has a 10% chance of rejection with the message `"Failed to fetch quote"`.
 *
 * The `quotes` array has been imported above for your use.
 *
 * HINT:
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise Promises | MDN}
 *
 * @category 08 - Async/Await & APIs
 * @function fetchQuote
 * @returns {Promise<string>} - A promise that resolves to a random quote or rejects with an error message.
 *
 * @example
 * fetchQuote().then(quote => {
 *   console.log(quote); // Random motivational quote
 * }).catch(error => {
 *   console.log(error); // "Failed to fetch quote"
 * });
 */
// Function fetchQuote will return a promise
//  when the promise resolves it will return a random quote from an array 'quotes'
//  the promise will have a 10% chance of rejection which will log a message: "Failed to fetch quote"
console.log(quotes.length);
console.log(quotes);
export const fetchQuote = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //set timeout to include the required 350ms delay
      const success = Math.random() > 0.1; //simulate a 1/10 chance of failure
      if (success) {
        let randomQuote = Math.floor(Math.random() * quotes.length); //pick a random quote out of an array
        resolve(quotes[randomQuote]); //if promise is fulfilled
      } else {
        reject("Failed to fetch quote"); //if promise is rejected
      }
    }, 350);
  });
};
