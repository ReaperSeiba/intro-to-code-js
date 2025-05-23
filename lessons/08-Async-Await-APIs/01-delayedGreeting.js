/**
 * #1: delayedGreeting
 *
 * `delayedGreeting` function simulates a greeting message that is logged to the console after a specified delay.
 *
 * `delayedGreeting` accepts three parameters:
 * - `name`: The name of the person to greet.
 * - `delay`: The delay, in milliseconds, after which the greeting is triggered.
 * - `callback`: A function that will be executed after the delay, which receives the greeting message as its argument.
 *
 * `delayedGreeting` should wait for the specified delay, then construct a greeting message in the format: `"Hello, <name>!"`.
 * It should then call the `callback` function with the constructed greeting message.
 *
 * HINT:
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/setTimeout setTimeout global function}
 *
 * @category 08 - Async/Await & APIs
 * @function delayedGreeting
 * @param {string} name - The name of the person to greet.
 * @param {number} delay - The time, in milliseconds, to wait before logging the greeting.
 * @param {function} callback - The callback function to be executed with the greeting message after the delay.
 * @returns {void} This function doesn't return a value directly.
 *
 * @example
 * delayedGreeting('Alice', 2000, (greeting) => console.log(greeting));
 * // After 2 seconds, logs: "Hello, Alice!"
 *
 * @example
 * delayedGreeting('Bob', 1000, (greeting) => console.log(greeting));
 * // After 1 second, logs: "Hello, Bob!"
 */

// delayedGreeting is a function that will log a message after a specfied delay. Name, delay, and a callback function are provided as input parameters
// delay should be used in a setTimeout as the delay input, name will be used as part of the console log, the callback will be used within SetTimout

export function delayedGreeting(name, delay, callback) {
  setTimeout(() => {
    //set timeout to utilize the delay parameter and to call the callback function
    callback(`Hello, ${name}!`);
  }, delay);
}
