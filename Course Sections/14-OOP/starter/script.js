'use strict';

// Constructor function (our blueprint)
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // // Bad practice! never create a function inside of constructor function
  // this.calcAge = function () {
  //   console.log(2023 - this.birthYear);
  // };
};

const anil = new Person('Anil', 1999);
console.log(anil);
// Person {firstName: 'Anil', birthYear: 1999}

//  ==== STEPS ====
// 1. New {} is created
// 2. Function is called, this = {}
// 3. {} linked to prototype
// 4. Function automatically return {}

const matilda = new Person('Matilda', 2017);
const chris = new Person('Chris', 1984);

console.log(matilda);
// Person {firstName: 'Matilda', birthYear: 2017}
console.log(chris);
// Person {firstName: 'Chris', birthYear: 1984}

const jay = 'Jay';

console.log(anil instanceof Person);
// true
console.log(jay instanceof Person);
// false

// Prototypes
Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

anil.calcAge();
// 24
matilda.calcAge();
// 6

console.log(anil.__proto__);
// {calcAge: ƒ, constructor: ƒ}
console.log(anil.__proto__ === Person.prototype);
// true
console.log(Person.prototype.isPrototypeOf(anil));
// true
console.log(Person.prototype.isPrototypeOf(matilda));
// true
console.log(Person.prototype.isPrototypeOf(Person));
// false

// anil.__proto__ === Person.prototype ---> Person.prototype, Person'ın prototype'ı değil, anil'in prototype'ı. Bu yüzden true. line 58 bunu doğruluyor
