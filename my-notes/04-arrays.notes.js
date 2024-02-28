// const obj1 = { a: "banana" };
// const obj2 = obj1;

// console.log(obj1.a); // 'banana'
// console.log(obj2.a); // 'banana'

// obj2.a = "mango";
// console.log("after mango", obj1.a); // 'mango'
// console.log("after mango", obj2.a); // 'mango'

// obj1.location = "London";
// console.log("keys after location", obj1); // 'a and location
// console.log("keys after location", obj2); // a and location

// obj2 = 49;
// console.log(obj1); // this woulda been fine
// console.log(obj2); // Error

let actuallyUneven = [
  [0, 1, 2, 3],
  [8, 9],
  [4, 5, 6, 7],
];

console.log(actuallyUneven[1]); // [8,9]
