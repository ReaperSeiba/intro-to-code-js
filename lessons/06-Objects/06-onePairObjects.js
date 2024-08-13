/**
 * #6: onePairObjects
 *
 * onePairObjects accepts an inputObj containing any number of key-value pairs.
 * onePairObjects splits an object into an array of single key-value pair objects.
 *
 * CHALLENGE: onePairObjects can be written as a one-liner.
 *
 * @category 06 - Objects
 * @function onePairObjects
 * @param {Object} inputObj
 * @returns {[] | Object[]} an array where each entry of the array is a single key-value paired obj, based off the original inputObj
 *
 * @example
 * onePairObjects({})
 * // => []
 * onePairObjects({ one: 1 })
 * // => [ { one: 1 } ]
 * onePairObjects({ one: 1, two: true, three: "no" })
 * // => [ { one: 1 }, { two: true }, { three: "no" } ]
 */

// export function onePairObjects(inputObj) {
//   let result = [];
//   let arr = Object.entries(inputObj);
//   for (let i = 0; i < arr.length; i++) {
//     let newObj = { [arr[i][0]]: arr[i][1] };
//     result.push(newObj);
//   }
//   return result;
// }

export const onePairObjects = (inputObj) =>
  Object.entries(inputObj).map(([key, value]) => ({ [key]: value }));
