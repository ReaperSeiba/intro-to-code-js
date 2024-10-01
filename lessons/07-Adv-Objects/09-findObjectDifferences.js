/**
 * #9: findObjectDifferences
 *
 * The `findObjectDifferences` function accepts two objects, `obj1` and `obj2`.
 *
 * `findObjectDifferences` compares the two objects and returns an object that contains the differences.
 * - If a property exists in `obj1` but not in `obj2`, it will be included in the result with its value from `obj1`.
 * - If a property exists in both objects but with different values, it will be included with its values from both `obj1` and `obj2`.
 * - If a property exists in `obj2` but not in `obj1`, it will be included with its value from `obj2`.
 *
 * `findObjectDifferences` helps in identifying discrepancies between two objects by highlighting properties that differ between them.
 *
 * @category 07 - Adv Objects
 * @function findObjectDifferences
 * @param {Object} obj1 - The first object to compare.
 * @param {Object} obj2 - The second object to compare.
 * @returns {Object} An object representing the differences between `obj1` and `obj2`.
 *
 * @example
 * const objA = { name: 'Alice', age: 30 };
 * const objB = { name: 'Alice', age: 31, city: 'Wonderland' };
 * findObjectDifferences(objA, objB);
 * // Returns: { age: [30, 31], city: [undefined, 'Wonderland'] }
 *
 * const objX = { color: 'red', size: 'M' };
 * const objY = { color: 'blue', size: 'M', material: 'cotton' };
 * findObjectDifferences(objX, objY);
 * // Returns: { color: ['red', 'blue'], material: [undefined, 'cotton'] }
 */
//will need a blank return object to store differences
//convert both objects into arrays to use in comparisons
//use for of loop, if keys and values match remove them from the objects
//if keys match and values differ push combined values as an array with 2 values to use object.FromEntires
//if keys dont match push value + undefined as an array with 2 values to use object.fromEntries
//repeat for obj2 loop but only if key is not found in obj1 as overlaps should have been checked.
// export function findObjectDifferences(obj1, obj2) {
//   let returnData = [];

//   for (const [key, value] of Object.entries(obj1)) {
//     if (obj2.hasOwnProperty(key)) {
//       if (value !== obj2[key]) {
//         returnData.push([key, [value, obj2[key]]]);
//       }
//     } else {
//       returnData.push([key, [value, undefined]]);
//     }
//   }

//   for (const [key, value] of Object.entries(obj2)) {
//     if (!obj1.hasOwnProperty(key)) {
//       returnData.push([key, [undefined, value]]);
//     }
//   }

//   return Object.fromEntries(returnData);}
//REWRITE

// HINTS
// How can you use uniqueness in your solution? (Set)

export function findObjectDifferences(obj1, obj2) {
  const resultArr = [];
  const uniqueKeys = new Set([...Object.keys(obj1), ...Object.keys(obj2)]);

  //set creates a collection of unique keys

  for (const key of uniqueKeys) {
    //cycling throught he keys to pull the values from each object
    const value1 = obj1[key];
    const value2 = obj2[key];
    if (value1 !== value2) {
      resultArr.push([key, [value1, value2]]);
    }
    //as long as the values are different they are pushed to be returned as an object
  }
  return Object.fromEntries(resultArr);
}
