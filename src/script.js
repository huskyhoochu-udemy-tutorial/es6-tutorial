// let and const

function driverLicence6(passedTest) {
  let firstName;
  const yearOfBirth = 1990;

  if (passedTest) {
    firstName = 'John';
  }

  console.log(`Name: ${firstName}, Birth: ${yearOfBirth}`);
}

driverLicence6(true);
