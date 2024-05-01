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
// console.log(obj3.country.state.city); // "Tokyo"

const obj9 = {
  key1: "hello",
  "longer-key-name-here": 42,
  nest: {
    lv2: "banana",
    grades: [
      { name: "Sally", grade: 11 },
      { name: "Terrence", grade: 12 },
      { name: "Jacob", grade: 1599 },
    ],
  },
};

// console.log(obj9.key1);
// console.log(obj9["longer-key-name-here"]);
// console.log(obj9.nest.lv2);
// console.log(obj9["nest"]["grades"][1]["grade"]);
// console.log(obj9.nest.grades[1].grade);

// key: food -- value: rice, top level of obj9

obj9.food = "rice";
// console.log(obj9.food);

obj9.nest.grades[0].grade = 12;
// console.log(obj9.nest.grades);

const objWithStuffToRemove = {
  breakfast: "coffee",
  lunch: "pulled chicky sando",
  dinner: "...",
  birthday: "who cares",
};

// console.log(objWithStuffToRemove);

// Remove the "birthday" k-v pair from the obj
delete objWithStuffToRemove.birthday;

// operator obj1.reference
// console.log(objWithStuffToRemove);

obj9.nest.grades.splice(1, 1);
// console.log(obj9.nest);

const methods = {
  helloWorld: function () {
    console.log("Hello World");
  },
  printName() {
    console.log("your name");
  },
};

methods.helloWorld();

// assign methods a function goodbyeWorld
methods.goodbyeWorld = function () {
  console.log("Goodbye World");
};
methods.goodbyeWorld();

// assign methods a welcomeBackWorld function WITHOUT using a direct function expression assignment

function welcomeBackWorld() {
  console.log("Welcome Back World");
}

methods.welcomeBackWorld = welcomeBackWorld;

methods.printName();
