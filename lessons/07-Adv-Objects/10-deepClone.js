/**
 * #10: deepClone
 *
 * The `deepClone` function accepts a single object, `inputObj`, and creates a deep copy of it.
 * This means that all nested objects and properties are also cloned.
 *
 * `deepClone` handles primitive values, and nested objects.
 *
 * BONUS: `deepClone` should also be able to handle special objects like Dates.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date Date on MDN}
 *
 * @category 07 - Adv Objects
 * @function deepClone
 * @param {Object} inputObj - The object to clone.
 * @returns {Object} A deep clone of the input object.
 *
 * @example
 * const original = { name: "Alice", age: 30 };
 * const clone = deepClone(original);
 * console.log(clone); // => { name: 'Alice', date: 30 }
 *
 * @example BONUS
 * const withDateObj = { name: 'Alice', date: new Date('2000-01-01') };
 * const clone = deepClone(withDateObj);
 * console.log(clone); // => { name: 'Alice', date: Date object }
 */
//objects are pass by reference meaning assigning a 'clone' inputObj will mutate the original when modified...
//Objective: create a new object utilizing data within inputObj

export function deepClone(object) {
  //found in docs does not pass bonus

  const objectCopy = JSON.parse(JSON.stringify(object));
  return objectCopy;
}

// export function deepClone(inputObj) {
//   const copy = {};

//   for (const key in inputObj) {
//     const val = inputObj[key];

//     if (val instanceof Date) {
//       // Handle Date objects by creating a new Date instance
//       copy[key] = new Date(val.getTime());
//     } else if (typeof val === "object" && val !== null) {
//       // Handle plain objects by creating a shallow copy
//       copy[key] = { ...val };
//     } else {
//       // Handle other types (primitives, functions, etc.)
//       copy[key] = val;
//     }
//   }

//   return copy;
// }

// HINT
// What's the difference between a shallow copy of an object and a deep copy?

//Shallow Clones create a new object but with only the top level properties, meaning that nested objects
//become references rather than direct fully copies

//Deep Clone is a fully recursive copy of an object creating actual copies of every nested object.
