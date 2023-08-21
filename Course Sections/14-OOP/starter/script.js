'use strict';

/*
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

// Set property from the prototype
Person.prototype.species = 'Homo Sapines';
console.log(anil.species);
// Homo Sapines
console.log(matilda.species);
// Homo Sapines
console.log(anil);
// birthYear: 1999
// firstName: "Anil"
// [[Prototype]]: Object
// species property direkt olarak anil'in içinde değil, child gibi. [Prototype]'ın içinde.
console.log(anil.hasOwnProperty('firstName'));
// true
console.log(anil.hasOwnProperty('species'));
// false

console.log(anil.__proto__);
// {species: 'Homo Sapines', calcAge: ƒ, constructor: ƒ}

// Object.prototype (top of prototype chain)
console.log(anil.__proto__.__proto__);
// {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
console.log(anil.__proto__.__proto__.__proto__);
// null

const arr = [3, 3, 3, 6, 4, 4, 6, 2, 5, 1]; // new Array === []
console.log(arr.__proto__);
// [constructor: ƒ, at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, …] it gives all array methods
console.log(arr.__proto__ === Array.prototype);
// true

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());
// (6) [3, 6, 4, 2, 5, 1]
// Görüldüğü gibi unique() diye bir array method oluşturdum tıpkı map gibi filter gibi.

// Coding Challenge #1
// Your tasks:
// 1. Use a constructor function to implement a 'Car'. A car has a 'make' and a 'speed' property. The 'speed' property is the current speed of the car in km/h
// 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console
// 4. Create 2 'Car' objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them
// Test data:
// Data car 1: 'BMW' going at 120 km/h
// Data car 2: 'Mercedes' going at 95 km/h

// 1)
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

// 2)
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};

// 3)
Car.prototype.break = function () {
  this.speed -= 5;
  console.log(this.speed);
};

// 4)
const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);
bmw.accelerate();
bmw.break();
mercedes.accelerate();
mercedes.break();
*/

// class expression
// const PersonCl = class {}

// class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2026 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}, how you doing?`);
  }
}

const anil = new PersonCl('Anil', 1999);
console.log(anil);
// PersonCl {firstName: 'Anil', birthYear: 1999}

anil.calcAge();
// 27

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}, how you doing?`);
// };
anil.greet();
// Hey Anil, how you doing?

// 1. Classes are NOT hoisted (means we can't use them before they are declared)
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

const account = {
  owner: 'Anil',
  movements: [200, 300, 550, 120],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
// 120

account.latest = 50;
console.log(account.movements);
// (5) [200, 300, 550, 120, 50]
