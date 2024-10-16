import { isAnObject } from "../06-Objects/01-isAnObject";

/**
 * #13: objectFlattener
 *
 * `objectFlattener` accepts a single input, inputObj, which is an object.
 *
 * When `objectFlattener` encounters a top-level key in inputObj with a value that is an object,
 * it will copy all the key-value pairs from that nested object to the top-level of inputObj.
 * Then, it will delete the original top-level key that had the nested object as its value.
 *
 * The inputObj is guaranteed to be an object that always has at least one key-value pair.
 * All inputObj values are guaranteed to never be null or undefined.
 *
 * HINT: What can you use to test the data type of a value of inputObj?
 *
 * @category 07 - Adv Objects
 * @function objectFlattener
 * @param {Object} inputObj - The object to flatten.
 * @returns {Object} - The flattened object.
 *
 * @example
 * const noObjVal = { one: 1, two: "string" };
 * objectFlattener(noObjVal); // => { one: 1, two: "string" }
 *
 * const oneObjVal = { one: 1, two: { three: false } };
 * objectFlattener(oneObjVal); // => { one: 1, three: false }
 *
 * const nestedObjVal = { one: 1, two: { three: false, four: 4 }, five: { six: 'six' } };
 * objectFlattener(nestedObjVal); // => { one: 1, three: false, four: 4, six: 'six' }
 */
//result Array to store flattened results
//use isAnObject function from previous test
//loop through inputObj entries
// test to see if they are an object, push results that are not objects to array
//if object use helper function that runs until object detection is false and returns a flattened array

// export function objectFlattener(inputObj) {
//   let resultArr = [];
//   for (const [key, value] of Object.entries(inputObj)) {
//     if (isAnObject(value)) {
//       resultArr.concat(flatten(value));
//     } else {
//       resultArr.push([key, value]);
//     }
//   }
//   return Object.fromEntries(resultArr);
// }

// function flatten(objectToFlatten) {
//   let array = [];
//   for (const [key, value] of Object.entries(objectToFlatten)) {
//     if (isAnObject(value)) {
//       array.concat(flatten(value));
//     } else {
//       array.push([key, value]);
//     }
//   }
//   console.log(array);
//   return array;
// }

// HINTS
// Use isAnObject
// Stick to Object methods; no Array conversions/methods needed

export function objectFlattener(inputObj) {
  let resultObj = {};
  for (const [key, value] of Object.entries(inputObj)) {
    //if value is an object assign its key values to the result object
    if (isAnObject(value)) {
      Object.assign(resultObj, value);
    }
    //otherwise assign current key value pair to object
    else {
      resultObj[key] = value;
    }
  }
  return resultObj;
}

// Didnt expect full pass; idk why this passest for multiple nested objects if its only flattening 1 layer??

// export function objectFlattener(inputObj) {
//   for (const key in inputObj) {
//     const currValue = inputObj[key];
//     if (isAnObject(currValue)) {
//       for (const subKey in currValue) {
//         inputObj[subKey] = currValue[subKey];
//       }
//       delete inputObj[key];
//     }
//   }
//   return inputObj;
// }

// /**
//  * Using Object.assign
//  */
// export function objectFlattener(inputObj) {
//   for (const key in inputObj) {
//     const currVal = inputObj[key];
//     if (isAnObject(currVal)) {
//       Object.assign(inputObj, currVal);
//       delete inputObj[key];
//     }
//   }
//   return inputObj;
// }
