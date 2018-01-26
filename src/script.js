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
