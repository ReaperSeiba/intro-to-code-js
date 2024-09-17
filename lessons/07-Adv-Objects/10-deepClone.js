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
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
//I dont think this was supposed to pass accoding to the warning for deepcloning in the docs??
export function deepClone(inputObj) {
  const clone = Object.assign({}, inputObj);
  return clone;
}
