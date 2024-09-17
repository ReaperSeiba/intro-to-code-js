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
  console.log(items);
  const resultsMap = new Map();
  for (let i = 0; i < items.length; i++) {
    for (const [key, value] of Object.entries(items[i])) {
      if (resultsMap.has(key)) {
        resultsMap.get(key).push(value);
        console.log("Value pushed to duplicate key");
      } else {
        resultsMap.set(key, [value]);
        console.log("Key not found, new key created in Map");
      }
    }
  }
  console.log(resultsMap);
  return resultsMap;
}
