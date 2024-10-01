/**
 * #2: propValMap
 *
 * `propValMap` accepts an array of objects, items.
 * `propValMap` creates a Map where each key is a unique property from the input objects,
 * and its corresponding value is an array of all the values associated with that property.
 *
 * @category 07 - Adv Objects
 * @function propValMap
 * @param {Array<Object>} items - An array of objects to process.
 * @returns {Map} A Map with keys representing unique properties and values being arrays of corresponding values.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map Map on MDN}
 *
 * @example
 * const items = [
 *   { color: 'red', size: 'M' },
 *   { color: 'blue', price: 10 },
 *   { size: 'L', price: 15 }
 * ];
 *
 * propValMap(items);
 * // Returns:
 * // Map {
 * //   'color' => ['red', 'blue'],
 * //   'size' => ['M', 'L'],
 * //   'price' => [10, 15]
 * // }
 */

//Idea: Iterate through array of objects
//iterate through object to pull each KV pair
//assign keys and values (values as an array to account for multiple) to an empty Map
//if map has the key push new value to the array of values assigned to the key
export function propValMap(items) {
  const resultsMap = new Map();

  for (let i = 0; i < items.length; i++) {
    for (const [key, value] of Object.entries(items[i])) {
      if (resultsMap.has(key)) {
        resultsMap.get(key).push(value);
      } else {
        resultsMap.set(key, [value]);
      }
    }
  }
  console.log(resultsMap);
  return resultsMap;
}

// Christian's version
// export function propValMap(items) {
//   // Create an empty Map to store the results
//   const resultMap = new Map();

//   // Loop through the array of objects
//   items.forEach((item) => {
//     // For each object, get all the key-value pairs
//     const entries = Object.entries(item);

//     // Loop through each key-value pair
//     entries.forEach(([key, value]) => {
//       // Check if this key already exists in the Map
//       if (!resultMap.has(key)) {
//         // If not, create a new empty array for this key
//         resultMap.set(key, []);
//       }
//       // Add the value to the array associated with the key
//       resultMap.get(key).push(value);
//     });
//   });

//   // Return the Map with all the values collected
//   return resultMap;
// }
