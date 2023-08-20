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
