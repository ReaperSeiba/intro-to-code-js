# 06 - Objects

- [06 - Objects](#06---objects)
  - [What is an object?](#what-is-an-object)
  - [Anatomy of a object](#anatomy-of-a-object)
    - [Basic object accessing](#basic-object-accessing)
    - [Dot-notation](#dot-notation)
    - [Bracket notation](#bracket-notation)
    - [Variable access](#variable-access)
    - [Object mutation](#object-mutation)
      - [Note on nested assignment](#note-on-nested-assignment)
  - [Relevant Links](#relevant-links)

## What is an object?

An object is a collection of properties and the property is an association between a key and a value.

## Anatomy of a object

- An object is put together using {} to collect the object's key and value property pairs.
- Valid JS object keys are strings or values that are allowed to be used as variable names.
  - Hyphens are not allowed to be used in key names if the key is not explicitly stringified.
    - e.g. `with-hyphen` vs `"with-hyphen"`

```js
const obj1 = {
  mostRecentMeal: "loaded pizza fries",
  "with-hyphen": 42,
  314: 1519,
};

console.log(obj1); // is simple reference
console.log(typeof obj1); // "object"
console.log(obj1["with-hyphen"]); // using brackets to access string keys
```

### Basic object accessing

- One of the ways to access property values on a given object is through the use of dot-notation (object.property)
- Another way that we can access property values on an object is through bracket notation. e.g. object["property"]
- Keys can have nested objects as their value pair.
  - And in the case of these keys we can access by dotting off of those if we wanted to use dot-notation.

### Dot-notation

Dot-notation is when you use a period in between the object, which is being used as the namespace, and the key for the value you want to access.

In a deeply nested object, we can chain together different key properties using dots to move deeper into the nested object chain.

```js
const obj2 = {
  lv1: {
    lv2: {
      lv3: {
        lv4: "hello you found me",
      },
    },
  },
};

console.log(obj2.lv1.lv2.lv3.lv4); // "hello you found me"
```

### Bracket notation

- When you use bracket notation for objects you must use explicit strings as your key values and not the interpreted strings that would be present during an object's definition.
- Use brackets in place of dots to separate nested keys from eachother and we cannot use the key name unstringified. Example object["key1"]["key2"]["key3"]

### Variable access

- The only way to work with variables to access key value pairs in an object is by directly using them in bracket notation.

```js
let someVar = "fruits";

const foods = {
  fruits: ["banana", "kiwi", "strawberry", "cranberries"],
};

console.log(fruits[someVar]);
// [ 'banana', 'kiwi', 'strawberry', 'cranberries' ]
```

### Object mutation

You can modify objects and add key value pairs after it's initial declaration by simply using dot-notation with your desired keyname and assigning it some value.

You can also do the same sort of assignment using bracket notation as well.

```js
const obj3 = {};

// dot-notation assignment
obj3.sport = "basketball";

// bracket notation assignment
obj3["shoes"] = "sneakers";

console.log(obj3.sport); // "basketball"
console.log(obj3.shoes); // "sneakers"
```

#### Note on nested assignment

For us to create nested values within an existing object, we need to define an object at each level until we get to the final internal object.

```js
const obj3 = {};

// using dot-notation to define each nested level as an object
obj3.country = {};
obj3.country.state = {};

// the actual k-v assignment within the "state" sub-object
obj3.country.state.city = "Tokyo";
```

---

## Relevant Links

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors
