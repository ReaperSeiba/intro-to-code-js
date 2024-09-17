/**
 * #4: validateObject
 *
 * `validateObject` accepts two objects as inputs, inputObj, and schema.
 *
 * `validateObject` checks that an object matches a given schema, where the schema is defined as another object.
 *
 * The schema object contains keys that the input object must have, and each key's value in the schema specifies the expected type of the value in the input object.
 *
 * `validateObject` returns true if the input object conforms to the schema and false otherwise.
 *
 * Empty schema objects signify that there are no required keys and value types.
 *
 * @category 07 - Adv Objects
 * @function validateObject
 * @param {Object} inputObj - The object to validate.
 * @param {Object} schema - The schema defining the required structure and types.
 * @returns {boolean} True if the object is valid, false otherwise.
 *
 * @example
 * const obj = { name: 'Alice', age: 30 };
 * const schema = { name: 'string', age: 'number' };
 * validateObject(obj, schema); // => true
 *
 * const invalidObj = { name: 'Alice', age: '30' };
 * validateObject(invalidObj, schema); // => false
 */

//input object must have matching key names and value type to the schema object
//return a boolean value depending on if input matches
//convert input object into key/value array, iterate through array and compare each key/value to the schema
//if the schema is empty or full loop completes return true

//first attempt tried for of loops after converting the objects into entry arrays, was unable to iterate correctly
//second attempt was to try using Maps of the objects for .has and.get
export function validateObject(inputObj, schema) {
  const inputObjMap = new Map(Object.entries(inputObj));
  const schemaMap = new Map(Object.entries(schema));
  for (const [key, value] of schemaMap) {
    if (!inputObjMap.has(key)) {
      return false;
    } else if (value !== typeof inputObjMap.get(key)) {
      console.log(typeof value, typeof inputObjMap.get(key));
      return false;
    }
  }
  return true;
}
