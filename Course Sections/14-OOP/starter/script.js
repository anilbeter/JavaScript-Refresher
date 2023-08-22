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


// class expression
// const PersonCl = class {}

// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2026 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}, how you doing?`);
  }

  get age() {
    return 2026 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
}

const anil = new PersonCl('Anil Beter', 1999);
console.log(anil);

anil.calcAge();
// 27

console.log(anil.age);
// 27

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}, how you doing?`);
// };
anil.greet();
// Hey Anil, how you doing?

// 1. Classes are NOT hoisted (means we can't use them before they are declared)
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

const chris = new PersonCl('Chris', 1984);
// Alert -> Chris is not a full name!

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


const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

// static method
Person.hey = function () {
  console.log('Hey there 👋🏻');
};
Person.hey();
// Hey there 👋🏻

// Static methods are not inherited
const anil = new Person('Anil', 1999);
// anil.hey();
// Uncaught TypeError: anil.hey is not a function

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2026 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}, how you doing?`);
  }

  get age() {
    return 2026 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there :)');
  }
}

PersonCl.hey();
// Hey there :)
*/

const PersonProto = {
  calcAge() {
    console.log(2026 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven); // {}
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge(); // 24

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1994);
sarah.calcAge();
// 32

/////////////////////////////////////////
// Challenge #2
// Your tasks:
// 1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6)
// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6)
// 4. Create a new car and experiment with the 'accelerate' and 'brake' methods, and with the getter and setter.
// Test data:
//  Data car 1: 'Ford' going at 120 km/h
// GOOD LUCK 😀

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS); // 75
ford.accelerate(); // Ford is going at 130 km/h
ford.speedUS = 50;
console.log(ford); // CarCl {make: 'Ford', speed: 80}

//////////////////////////////////////////////////
// Inheritance Between "Classes": Constructor Functions

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2026 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike); // Student {firstName: 'Mike', birthYear: 2020, course: 'Computer Science'}
mike.introduce(); // My name is Mike and I study Computer Science
mike.calcAge(); // 6

///////////////////////////////////////////
// Coding Challenge #3
// Your tasks:
// 1. Use a constructor function to implement an Electric Car (called 'EV') as a child "class" of 'Car'. Besides a make and current speed, the 'EV' also has the current battery charge in % ('charge' property)
// 2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo'
// 3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%'
// 4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! Hint: Review the definiton of polymorphism 😉
// Test data:
//  Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed, charge);
  this.charge = charge;
};

// Link the prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} going at ${this.speed}, with a charge of ${this.charge}%`
  );
};

const tesla = new EV('Tesla', 120, 23);
console.log(tesla);
tesla.chargeBattery(90);
console.log(tesla);
tesla.accelerate();
