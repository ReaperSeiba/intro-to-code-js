/**
 * #6: valueLocator
 *
 * Define valueLocator. Make sure to export it.
 * valueLocator accepts two parameters, searchVal & arr.
 *
 * valueLocator uses the searchVal to determine whether that val is present within arr.
 * When searchVal is present, valueLocator returns a string featuring searchVal, its index in the arr, and arr itself.
 * Otherwise, valueLocator returns a string featuring searchVal and arr itself.
 *
 * See examples for exact formatting.
 *
 * @category 04 - Arrays and Loops
 * @function valueLocator
 * @param {String} searchVal - the string to search for
 * @param {String[]} arr - the array to search within
 * @returns {String} A sentence detailing whether or not the search value was found, and at what index.
 *
 * @example
 * valueLocator("xyx", ["zyz", "xyx", "abc", "bd"]) =>
 *  "xyx is at index 1 of the array [zyz,xyx,abc,bd]."
 * valueLocator("not", ["zyz", "xyx", "abc", "bd"]) =>
 *  "not cannot be found in the array [zyz,xyx,abc,bd]."
 */
// export function valueLocator(searchVal, arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (searchVal === arr[i]) {
//       return `${searchVal} is at index ${i} of the array [${arr}].`;
//     }
//   }
//   return `${searchVal} cannot be found in the array [${arr}].`;
// }

export function valueLocator(searchVal, arr) {
  const idx = arr.indexOf(searchVal);
  if (idx !== -1) {
    return `${searchVal} is at index ${idx} of the array [${arr}].`;
  }
  return `${searchVal} cannot be found in the array [${arr}].`;
}
