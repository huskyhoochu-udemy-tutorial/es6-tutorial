webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// let and const
/*
function driverLicence6(passedTest) {
  let firstName;
  const yearOfBirth = 1990;

  if (passedTest) {
    firstName = 'John';
  }

  console.log(`Name: ${firstName}, Birth: ${yearOfBirth}`);
}

driverLicence6(true);
*/
// Blocks and IIFEs
/*
{
  const a = 1;
  let b = 2;
  var c = 3;
}

console.log(a+b);
console.log(c);
*/

// Arrow functions
/*
const years = [1990, 1965, 1982, 1937];

let ages = years.map(el => 2016 - el);
console.log(ages);

ages = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);
console.log(ages);

ages = years.map((el, index) => {
  const now = new Date().getFullYear();
  const age = now - el;
  return `Age element ${index + 1}: ${age}.`;
});
console.log(ages);
*/

// Arrow functions 2
/*
const greenBox = {
  color: 'green',
  position: 1,
  clickMe() {
    document.querySelector('.green').addEventListener('click', () => {
      const str = `This is greenBox number: ${this.position} and it is ${this.color}`;
      alert(str);
    });
  },
};
greenBox.clickMe();

const blueBox = {
  color: 'blue',
  position: 2,
  clickMe() {
    document.querySelector('.blue').addEventListener('click', () => {
      const str = `This is blueBox number: ${this.position} and it is ${this.color}`;
      alert(str);
    });
  },
};
blueBox.clickMe();

function Person(name) {
  this.name = name;
}

Person.prototype.myFriends = function greeting(friends) {
  const arr = friends.map(el => `${this.name} is friends with ${el}.`);
  console.log(arr);
};

const friends = ['bob', 'jane', 'mark'];
new Person('john').myFriends(friends);
*/

// Destructuring

var name = 'John',
    year = 26;

console.log(name);
console.log(year);

function calcAgeRetirement(years) {
  var age = new Date().getFullYear() - years;
  return [age, 65 - age];
}

var _calcAgeRetirement = calcAgeRetirement(1991),
    _calcAgeRetirement2 = _slicedToArray(_calcAgeRetirement, 2),
    age2 = _calcAgeRetirement2[0],
    retirement = _calcAgeRetirement2[1];

console.log(age2);
console.log(retirement);

/***/ })
],[0]);
//# sourceMappingURL=main.063097741104cc3c7940.js.map