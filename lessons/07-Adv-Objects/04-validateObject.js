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
// export function validateObject(inputObj, schema) {
//   const inputObjMap = new Map(Object.entries(inputObj));
//   const schemaMap = new Map(Object.entries(schema));

//   for (const [key, value] of schemaMap) {
//     if (!inputObjMap.has(key)) {
//       return false;
//     } else if (value !== typeof inputObjMap.get(key)) {
//       console.log(typeof value, typeof inputObjMap.get(key));
//       return false;
//     }
//   }
//   return true;
// }
//4, 9, 10, 11, 12, 13
//REWRITE (Dont use Map)

/**
 * //READ TIME 1:45
 * EXPLAIN
 * - what are problem objectives?
 * - what did you learn from examples provided?
 * - what are possible edge cases?
 *
 * The code must compare an input object to a given schema object, the input must have the keys of the schema
 * and the data types must match the values of the keys within the schema.
 *
 * empty schema means the object passes
 *
 * fringe case: data types of values could be object or an array?
 *
 * 5:01
 */

/**
 * APPROACH
 * - write solution structure in PSUEDOCODE
 * - basically simple english instructions to solve
 *
 * two given objects must be compared
 * if schema is empty return true
 * if input object is larger than schema return false
 * loop through input object and compare against schema object, if keys match use type of to determine data types
 * if input objects keys and values match with schema return true
 *
 *
 * 4:01
 */

/**
 * CODE below
 */

export function validateObject(inputObj, schema) {
  const schemaLength = Object.keys(schema).length;
  const inputObjLength = Object.keys(inputObj).length;

  if (schemaLength === 0) {
    return true;
  } else if (schemaLength > inputObjLength || inputObjLength === 0) {
    return false;
  }

  for (const entry in inputObj) {
    if (
      schema[entry] !== typeof inputObj[entry] &&
      schema.hasOwnProperty(entry)
    ) {
      return false;
    }
  }
  return true;
}
//28:36
/**
 * COMPLEXITY
 *
 * Copy your function implementation into ChatGPT and ask it for time and space complexity analysis. Be sure to ask questions if you don't understand terms/topics/etc.
 *
 * TIME   O(), where...
 * SPACE  O(), where...
 */

/**
 * COMPLEXITY
 *
 * TIME   O(i + s)
 * SPACE  O(i + s)
 */

/**
 * OPTIMIZE
 * Once you have a working answer, re-examine implementation
 * How can you optimize it?
 */
//2:00, didn't have any ideas on how to optimize

/**
 * use wsplit or just a stopwatch app with a lap timer for this
 *
 *                  Total   Split
 *
 * READ             01:43
 * EXPLAIN          05:01   05:01
 * APPROACH         04:01   00:00
 * CODE [PASS]      28:36   20:09
 * OPTIMIZE         02:00   02:00
 *
 * Overall Total    41:21
 */
