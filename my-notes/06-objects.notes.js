const empty = {};

const obj1 = {
  mostRecentMeal: "loaded pizza fries",
  "with-hyphen": 42,
  314: 1519,
};

// console.log(obj1);

// console.log(typeof obj1);
// console.log(obj1["with-hyphen"]);

const obj2 = {
  lv1: {
    lv2: {
      lv3: {
        lv4: "hello you found me",
      },
    },
  },
};

//console.log(obj2.lv1.lv2.lv3.lv4);
// console.log(obj2["lv1"]["lv2"]["lv3"]["lv4"]);

let someVar = "fruits";

const foods = {
  fruits: ["banana", "kiwi", "strawberry", "cranberries"],
};

// console.log(foods.fruits);

// How do we access an object's k-v pairs using variables?
// console.log(foods[someVar]);

const obj3 = {};

obj3.sport = "basketball";
obj3["shoes"] = "sneakers";
obj3.country = {};
obj3.country.state = {};
obj3.country.state.city = "Tokyo";

// console.log(obj3.sport); // "basketball"
// console.log(obj3.shoes); // "sneakers"

// console.log(obj3.country);
// console.log(obj3.country.state);
console.log(obj3.country.state.city); // "Tokyo"
