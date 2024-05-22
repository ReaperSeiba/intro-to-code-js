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

// methods.helloWorld();

// assign methods a function goodbyeWorld
methods.goodbyeWorld = function () {
  console.log("Goodbye World");
};
// methods.goodbyeWorld();

// assign methods a welcomeBackWorld function WITHOUT using a direct function expression assignment

function welcomeBackWorld() {
  console.log("Welcome Back World");
}

methods.welcomeBackWorld = welcomeBackWorld;

// methods.printName();

// define an array of 3 elements
// define an object with three k-v pairs

let myArray = ["ketchup", "mustard", "relish"];

const myObj = {
  hotdog: "hot dog",
  hamburger: "hamburger",
  cheeseburger: "cheeseburger",
};

// console.log("arr", typeof myArray);
// console.log("obj", typeof myObj);

// console.log("arr", Array.isArray(myArray));
// console.log("obj", Array.isArray(myObj));

const num = 6;
const str = "fish";
const bool = false;
const arr = [4, 5, 6];
const obj = { hi: "mom" };
const fn = () => "yo";

const shorthand = {
  num,
  str,
  bool,
  arr,
  obj,
  fn,
};

// console.log(num);
// console.log(shorthand.num);

shorthand.num = 8;
// console.log(num);

// console.log("shorter", shorthand);

const scheduleData = {
  date: "03.27",
  id: "03.27",
  entries: [
    {
      start_time: "2021-03-27T05:32:00+0000",
      end_time: "2021-03-27T14:31:00+0000",
      scheduled_show: {
        mix_title: null,
        featured_residents: [
          {
            mix_resident: {
              resident_name: "vel",
              _meta: {
                uid: "dev-res-thank-you-scientist",
                type: "resident",
              },
            },
          },
        ],
      },
    },
  ],
};

const { entries, date, id } = scheduleData;

// console.log(date, id);

let j = {
  name: "Jerry",
  age: 47,
  sayHi() {
    console.log(this.name);
  },
};

// console.log(j.sayHi());

function what() {
  console.log(this);
}

// what();

const p1 = { name: "Tom" };
const p2 = { name: "Jill" };

p1.w = what;
p2.w = what;

// p1.w();
// p2.w();

const whoa = {
  name: "Sandy",
  // sayHi: () => console.log(this.name),

  sayHi() {
    let arrow = () => {
      console.log(this.name);
    };
    arrow();
  },
};

// whoa.sayHi();

const array1 = [1, 2, 3];
const array2 = [4, 5, 6, ...array1];
const arr3 = [...array1];

// array2.push(array1);
// const arr3 = array2.concat(array1);
// array2 = [...array2, ...array1];
// console.log(arr3);

const base = {
  temperature: "hot",
  weather: "sunny",
};

const withCity = {
  city: "Cattaraugus",
  ...base,
};

// console.log(withCity);

const person1 = {
  name: "Dammit",
  address: {
    city: "Toronto",
    country: "CA",
  },
};

let address = `${person1?.address?.streetAddr}` || "Incomplete Address";

const person2 = {
  address: {
    printAddr() {
      return "some addr";
    },
  },
};

// console.log(person2.address.streetAddr);

// console.log(
//   person2
//     ? person2.address
//       ? person2.address.streetAddr
//         ? person2.address.streetAddr.aptNum
//         : undefined
//       : undefined
//     : undefined
// );

// console.log(
//   person2 &&
//     person2.address &&
//     person2.address.streetAddr &&
//     person2.address.streetAddr.aptNum
// );

// console.log(person2?.address?.streetAddr?.aptNum);

// console.log("printAddr", person2?.address?.printAddr?.());

const keyToFind = "accountNum";

const obj7 = {};

const obj8 = {
  accountNum: "abcd1234",
};

// console.log(obj7?.[keyToFind]);
// console.log(obj8?.[keyToFind]);

const complexDummy = {
  id: "2489651045",
  type: "CreateEvent",
  actor: {
    id: 665991,
    login: "petroav",
    gravatar_id: "",
    url: "https://api.github.com/users/petroav",
    avatar_url: "https://avatars.githubusercontent.com/u/665991?",
  },
  repo: {
    id: 28688495,
    name: "petroav/6.828",
    url: "https://api.github.com/repos/petroav/6.828",
  },
  payload: {
    ref: "master",
    ref_type: "branch",
    master_branch: "master",
    description:
      "Solution to homework and assignments from MIT's 6.828 (Operating Systems Engineering). Done in my spare time.",
    pusher_type: "user",
  },
  public: true,
  created_at: "2015-01-01T15:00:00Z",
};

// for (key in complexDummy) {
//   // console.log(key);
// }

let countryCodes = {
  49: "Germany",
  41: "Switzerland",
  44: "Great Britain",
  1: "USA",
};

for (key in countryCodes) {
  const val = countryCodes[key];
  // console.log(key, val);
}

const ans = Object.entries(countryCodes);

for (let i = 0; i < ans.length; i++) {
  console.log(ans[i]);
}

console.log(ans);
