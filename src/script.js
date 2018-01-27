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
/*
const [name, year] = ['John', 26];
console.log(name);
console.log(year);

function calcAgeRetirement(years) {
  const age = new Date().getFullYear() - years;
  return [age, 65 - age];
}

const [age2, retirement] = calcAgeRetirement(1991);
console.log(age2);
console.log(retirement);
*/

// Arrays
/*
const boxes = document.querySelectorAll('.box');

const boxesArr = Array.from(boxes);
boxesArr.forEach((cur) => { cur.style.backgroundColor = 'dodgerblue'; });

// for (const idx of boxesArr) {
//   if (boxesArr.className === 'box blue') {
//     continue;
//   }
//   idx.textContent = 'Husky!';
// }

boxesArr.map((idx) => { idx.textContent = 'Husky!'; return idx; });

const ages = [12, 17, 8, 21, 14, 11];

console.log(ages.findIndex(item => item >= 18)); // 3 (인덱스)
console.log(ages.find(item => item >= 18)); // 21 (값 자체)
*/

function addFourAges(a, b, c, d) {
  return a + b + c + d;
}

const sum1 = addFourAges(18, 30, 12, 21);

console.log(sum1);

const ages = [18, 30, 12, 21];
const max3 = addFourAges(...ages); // ...이 인자 묶음 역할을 하는 듯
console.log(max3);

const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];

Array.from(all).forEach((cur) => {
  const style = cur;
  style.style.color = 'purple';
});
