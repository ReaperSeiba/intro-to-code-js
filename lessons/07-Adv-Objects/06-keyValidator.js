/**
 * #6: keyValidator
 *
 * `keyValidator` accepts two objects, a baseObj and a testObj.
 * `keyValidator` compares the keys of the testObj to the ones the baseObj has.
 * `keyValidator` returns an array of all the keys present in testObj that are missing from the baseObj.
 *
 * If the baseObj has all of the same keys as the testObj, return an empty array.
 *
 * CHALLENGE:
 * Can you write `keyValidator` function as a one-liner?
 *
 * @category 07 - Adv Objects
 * @function keyValidator
 * @param {Object} baseObj
 * @param {Object} testObj
 * @returns {String[] | []}
 *
 * @example
 * const o1 = { a: 1, b: 2 }
 * const o2 = { a: 1, b: 2 }
 * const o3 = { a: 1 }
 *
 * keyValidator(o1, o2) => [] // both objects have the same keys; nothing returned
 * keyValidator(o1, o3) => [] // o1 contains all the keys present in 03, and its own keys; nothing returned
 * keyValidator(o3, o1) => [ "b" ] // o3 is missing the "b" key-value pair that o1 has; return missing key
 */
// // Simple loop
// export function keyValidator(baseObj, testObj) {
//   let missingKeys = [];
//   const baseKeys = Object.keys(baseObj);
//   const testKeys = Object.keys(testObj);
//
//   for (const testKey of testKeys) {
//     if (!baseKeys.includes(testKey)) {
//       missingKeys.push(testKey);
//     }
//   }
//   return missingKeys;
// }

//seperate the keys from the test object and use an iterative callback to only include only keys not found in baseObj
export function keyValidator(baseObj, testObj) {
  return Object.keys(testObj).filter(
    (key) => !Object.keys(baseObj).includes(key)
  );
}
//tried reduce first and couldn't get it to work
