/**
 * #1: transformObjectVals
 *
 * The `transformObjectVals` function accepts two inputs:
 * - `inputObj`: an object with some key-value pairs
 * - `transformFn`: a function
 *
 * `transformObjectVals` applies `transformFn` to each value, replacing the original value with the transformed one.
 *
 * `transformObjectVals` returns a new object with the transformed values, while the original object remains unchanged.
 *
 * @category 07 - Adv Objects
 * @function transformObjectVals
 * @param {Object} inputObj - The object whose values will be transformed.
 * @param {Function} transformFn - The function used to transform each value in `inputObj`.
 * @returns {Object} A new object with the transformed values.
 *
 * @example
 * const numbers = { a: 1, b: 2, c: 3 };
 * const doubled = transformObjectVals(numbers, x => x * 2);
 * // doubled: { a: 2, b: 4, c: 6 }
 *
 * const words = { x: "hello", y: "world" };
 * const uppercased = transformObjectVals(words, x => x.toUpperCase());
 * // uppercased: { x: "HELLO", y: "WORLD" }
 */

/**
 * One not-nested loop is O(n), where n is the number of things iterated through
 * .keys loop
 * .values loop
 * .map loop
 * object keys assignment loop
 *
 * Time Complexity: O(4n) => O(n)
 */
export function transformObjectVals(inputObj, transformFn) {
  let objectKeysArr = Object.keys(inputObj);
  let objectValuesArr = Object.values(inputObj).map(transformFn);
  let resultObj = {};
  for (let i = 0; i < objectKeysArr.length; i++) {
    resultObj[objectKeysArr[i]] = objectValuesArr[i];
  }
  return resultObj;
}

/**
 * for...in loop
 *
 * Time Complexity: O(n)
 */
// Christian's version
// export function transformObjectVals(inputObj, transformFn) {
//   const result = {};
//   for (const key in inputObj) {
//     result[key] = transformFn(inputObj[key]);
//   }
//   return result;
// }
