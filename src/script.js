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

// The Spread Operator
/*
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
*/

// Rest parameters
/*
function isFullAge(...args) {
  console.log(args);
}

isFullAge(1990, 1999, 1965);
*/

// Default parameters
/*
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'Korea') {
  this.firstName = firstName;
  this.yearOfBirth = yearOfBirth;
  this.lastName = lastName;
  this.nationality = nationality;
}

const john = new SmithPerson('john', 1990);
const emily = new SmithPerson('emily', 1990, 'Grand', 'Japan');

console.log(john);
console.log(emily);
*/

// Maps
/*
const question = new Map();
question.set('question', 'What is th official name of the latest major JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);

question.set(true, 'Correct answer!');
question.set(false, 'Wrong, Please try again.');

console.log(question.get('question'));

question.delete(4);
question.delete(4);

console.log(question.entries());

question.forEach((key, value) => (console.log(`${key}: ${value}`)));
*/

// Classes
/*
class Person {
  constructor(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }

  calculateAge() {
    return new Date().getFullYear() - this.yearOfBirth;
  }

  static greeting() {
    console.log('Hey there!');
  }
}

const john = new Person('John', 1990, 'teacher');

console.log(john);
console.log(john.calculateAge());
Person.greeting();
*/

// Classes with Subclass
/*
class Person {
  constructor(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }

  calculateAge() {
    return new Date().getFullYear() - this.yearOfBirth;
  }
}

class Athlete extends Person {
  constructor(name, yearOfBirth, job, olympic, medals) {
    super(name, yearOfBirth, job);
    this.olymplic = olympic;
    this.medals = medals;
  }

  wonMedal() {
    this.medals = this.medals + 1;
    return this.medals;
  }
}

const johnAthlete = new Athlete('John', 1990, 'swimmer', 3, 10);
console.log(johnAthlete.wonMedal());
console.log(johnAthlete.calculateAge());
*/

