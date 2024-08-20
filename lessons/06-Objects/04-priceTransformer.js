/**
 * #4: priceTransformer
 *
 * priceTransformer takes in an array of objects.
 * Each object in the array has `food` and `price` keys.
 *
 * priceTransformer returns a single object where the keys are the values of each original `food` value, and its values are the values of each original `price` value..
 *
 * CHALLENGE: Can you write priceTransformer as a one-liner?
 *
 * @category 06 - Objects
 * @function priceTransformer
 * @param {Object[]} objArr
 * @prop {String} objArr[].food - the kind of food
 * @prop {Number} objArr[].price - the food's price
 * @returns {Object} the transformed object
 *
 * @example
 * const pricesOne = [
 *  { food: "chips", price: 4.5, }
 * ]
 * priceTransformer(pricesOne) // => { chips: 4.5 }
 *
 * const pricesTwo = [
 *  { food: "yogurt", price: 1.5, },
 *  { food: "banana", price: 1.99, }
 * ]
 * priceTransformer(pricesTwo) // => { yogurt: 1.5, banana: 1.99 }
 */

// TODO: this problem
// export function priceTransformer(objArr) {
//   let keyValuePairArray = [];
//   objArr.forEach((element) => keyValuePairArray.push(Object.values(element)));
//   let resultsObj = Object.fromEntries(keyValuePairArray);
//   console.log(keyValuePairArray);
//   console.log(resultsObj);
//   return resultsObj;
// }

export const priceTransformer = (objArr) =>
  Object.fromEntries(objArr.map((element) => Object.values(element)));
//using non oneliner answer
//pricetransformer expects object return
//return object = object.fromentries which expects an array of arrays containing key-value pairs
//objArr.map returns an array that iterates using a return function on each element of the objArr input of the function
//return function is Object.values which turns an objects values into an array
