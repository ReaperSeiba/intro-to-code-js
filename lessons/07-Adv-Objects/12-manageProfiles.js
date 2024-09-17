/**
 * #12: manageProfiles
 *
 * `manageProfiles` accepts two objects, `profiles` and `updates`, and applies the updates to the profiles.
 *
 * The `profiles` object contains a list of user profiles, each with a unique identifier as the key. The `updates` object contains updates where each key corresponds to a profile ID and each value is an object with fields to update.
 *
 * `manageProfiles` merges the `updates` into the `profiles`, replacing or adding fields as specified.
 *
 * @category 07 - Adv Objects
 * @function manageProfiles
 * @param {Object} profiles - The object containing existing profiles.
 * @param {Object} updates - The object containing updates for the profiles.
 * @returns {Object} The updated profiles object.
 *
 * @example
 * const profiles = {
 *   'user1': { name: 'Alice', age: 25 },
 *   'user2': { name: 'Bob', age: 30 }
 * };
 *
 * const updates = {
 *   'user1': { age: 26 },
 *   'user3': { name: 'Charlie', age: 28 }
 * };
 *
 * manageProfiles(profiles, updates);
 * // Returns:
 * // {
 * //   'user1': { name: 'Alice', age: 26 },
 * //   'user2': { name: 'Bob', age: 30 },
 * //   'user3': { name: 'Charlie', age: 28 }
 * // }
 */

//create return object based on profiles
//loop through updates and create empty user objects as needed for missing users
//if user is not missing loop through user entries and update profiles secondary keys
export function manageProfiles(profiles, updates) {
  let updatedProfiles = Object.assign({}, profiles);
  for (const [key, value] of Object.entries(updates)) {
    if (!updatedProfiles.hasOwnProperty(key)) {
      updatedProfiles[key] = {};
      updatedProfiles[key] = value;
    } else {
      for (const [key2, value2] of Object.entries(updates[key])) {
        updatedProfiles[key][key2] = value2;
      }
    }
  }
  return updatedProfiles;
}