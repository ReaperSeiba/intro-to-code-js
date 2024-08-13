import { isAnObject } from "./01-isAnObject";

/**
 * #3: objectCount
 *
 * objectCount accepts a single object with any number of key-value pairs.
 * objectCount counts the number of object sub-values the input object contains.
 *
 * HINT: What can you use to help you determine whether or not a value is an object?
 *
 * @category 06 - Objects
 * @function objectCount
 * @param {Object} obj -  The object whose properties are to be counted. The object can contain nested objects.
 * @returns {Number} - The total number of properties that are objects within the input object.
 *
 * @example
 * objectCount({}) // => 0
 * objectCount({ one: 1, two: 2, }) // => 0
 * objectCount({ one: true, two: {}, three: "word", four: 4 }) // => 1
 */

export function objectCount(obj) {
  let count = 0;

  let flatObjArr = Object.values(obj).flat();

  flatObjArr.forEach((element) => {
    if (isAnObject(element)) {
      count++;
    }
  });
  return count;
}

// WORKS
// export function objectCount(obj) {
//   let count = 0;

//   let flatObjArr = Object.values(obj).flat();

//   flatObjArr.forEach((element) => {
//     if (
//       typeof element === "object" &&
//       element !== null &&
//       !Array.isArray(element)
//     ) {
//       count++;
//     }
//   });
//   return count;
// }

// Answer w/o using .flat()
// export function objectCount(obj) {
//   let count = 0;

//   for (const value of Object.values(obj)) {
//     if (Array.isArray(value)) {
//       // maybe is an array containing objects
//       for (const element of value) {
//         if (isAnObject(element)) {
//           count++;
//         }
//       }
//     } else if (isAnObject(value)) {
//       count++;
//     }
//   }
//   return count;
// }
