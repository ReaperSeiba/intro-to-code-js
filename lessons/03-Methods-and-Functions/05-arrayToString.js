/**
 * #5: arrayToString
 *
 * Define the function arrayToString. Make sure to export it for testing use.
 * arrayToString accepts an array containing any number of strings of any length, and a connector, a string made up of any number of random characters.
 * arrayToString returns a combined string made up of each string in the array attached together by the connector.
 *
 * CHALLENGE:
 * Can you write this function as a one-liner? Remember to comment out the original function before testing your one-line version to avoid duplicate declaration errors!
 *
 * @category 03 - Methods and Functions
 * @function arrayToString
 * @param {String[]} array - all entries are strings
 * @param {String} connector - any number random characters
 * @returns {String}
 *
 * @example
 * arrayToString(["cat", "dog", "moo"], "") => "catdogmoo"
 * arrayToString(["cat", "dog", "moo"], " ") => "cat dog moo"
 * arrayToString(["cat", "dog", "moo"], "+-%") => "cat+-%dog+-%moo"
 */

//export const arrayToString = (array, connector) => array.join(connector);

/**
 * HOMEWORK: Rewrite this function so that it still works WITHOUT using .join()
 */

export function arrayToString(array, connector) {
  let result = "";
  for (let i = 0; i < array.length; i++) {
    if (i === array.length - 1) {
      result += array[i];
    } else {
      result += array[i] + connector;
    }
  }
  return result;
}
