/**
 * #5: manageInventory
 *
 * `manageInventory` accepts an array of inventory items and
 * `manageInventory` returns an object with each item's name as the key and its quantity as the value.
 *
 * Each inventory item is an object with `name` and `quantity` properties.
 * The `quantity` of each item should be summed if there are multiple items with the same name.
 *
 * @category 07 - Adv Objects
 * @function manageInventory
 * @param {Array<Object>} items - An array of objects where each object represents an inventory item with `name` and `quantity`.
 * @returns {Object} An object where each key is an item's name, and its value is the total quantity of that item.
 *
 * @example
 * const items = [
 *   { name: 'apple', quantity: 3 },
 *   { name: 'banana', quantity: 2 },
 *   { name: 'apple', quantity: 1 }
 * ];
 *
 * manageInventory(items);
 * // Returns: { apple: 4, banana: 2 }
 */

// given an array of objects, create an object with each key(item names) and their values(quantity)
//quantity should be summed if keys match
//create empty object for inventory
//iterate through items array, if key for name does not exist in inventory add key, if it exists add value from quantity
export function manageInventory(items) {
  let inventory = {};
  {
    for (let i = 0; i < items.length; i++) {
      let item = items[i].name;
      let quantity = items[i].quantity;
      if (inventory.hasOwnProperty(item)) {
        console.log("Inventory contained this key " + item);
        inventory[item] += quantity;
      } else {
        console.log("Inventory did not contain this key " + item);
        inventory[item] = quantity;
      }
    }
  }
  return inventory;
}
