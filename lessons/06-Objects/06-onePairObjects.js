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

//explanation|| Object.entries is converting inputObj into an array of arrays, those arrays contain a key value pair
// .map is applied to the new entries array of arrays.
//.map creates a new array which is calling a function on every element in the original array
//in this case our elements are [key, value] which represents the first and second element within each nested array within .entries array
// => return function that returns an object {[key]: value}
//using our value key as the key for the new obj [key](bracket notation) dynamic naming key variable : value as its pair value
//essentially for each element within the array we are returning an array filled with elements that
//were mapped into new objects using elements [0,1] from the sub arrays

//Originally derived from this:
//const map = {"a": 1, "b": 2, "c": 3};
// const mapped = Object.entries(map).map(([k,v]) => `${k}_${v}`);
// console.log(mapped);

// export function onePairObjects(inputObj) {
//   const arrayOfObj = [];

// Method 1: for-in loop using keys
// for (const key in inputObj) {
//   const singleObj = {};
//   singleObj[key] = inputObj[key];
//   arrayOfObj.push(singleObj);
// }

// or Method 2: for-of loop using Object.keys
// for (const key of Object.keys(inputObj)) {
//   const singleObj = {};
//   singleObj[key] = inputObj[key];
//   arrayOfObj.push(singleObj);
// }

// or Method 3: for-of loop using Object.entries
// for (const [key, value] of Object.entries(inputObj)) {
//   const singleObj = {};
//   singleObj[key] = value;
//   arrayOfObj.push(singleObj);
// }

//   return arrayOfObj;
// }
