'use strict';

/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName} you are ${age}, born in ${birthYear}`;
    console.log(output);
    // You are 38, born in 1999

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Sept';
      // Oh, and you're a millenial, Sept
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);
      // Oh, and you're a millenial, Anil

      function add(a, b) {
        return a + b;
      }
      output = 'NEW OUTPUT';
      console.log(output);
    }
    console.log(millenial); // true
    // var oldugu icin block disindan da erisebiliyorum, let veya const olsaydi referenceError alacaktim!
    // console.log(add(20, 3));
    // referenceError #NOT: eğer "use strict" i silersem console'da 23 ü görebilirim, strict mode sayesinde functionları block scope olarak görebiliyorum (HER ZAMAN USE STRICT KULLAN)
  }
  printAge();

  return age;
}

const firstName = 'Anil';
calcAge(1999);
// console.log(age); // ReferenceError
// printAge(); // ReferenceError



// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Anil';
var job = 'developer';
const year = 1999;

// Functions
// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(numProducts);
// undefined
if (!numProducts) deleteShoppingCart();
// normal de bu if koşulunun yanlış olması gerekiyor ama var ile tanımladıgım icin şu an undefined (falsy), başında ! var true oldu ve koşul sağlandı.

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); // true
console.log(y === window.y); // false
console.log(z === window.z); // false


console.log(this);
// output --> Window {window: Window, self: Window, document: document, name: '', location: Location, …}

const calcAge = function (birthYear) {
  console.log(2023 - birthYear);
  // 24
  console.log(this);
  // undefined
};
calcAge(1999);

const calcAgeArrow = birthYear => {
  console.log(2023 - birthYear);
  // 24
  console.log(this);
  // Window {window: Window, self: Window, document: document, name: '', location: Location, …}
};
calcAgeArrow(1999);

const anil = {
  year: 1999,
  calcAge: function () {
    console.log(this);
    console.log(2023 - this.year);
  },
};

anil.calcAge(1999);
// {year: 1999, calcAge: ƒ}
// 24

const matilda = {
  year: 2017,
};

matilda.calcAge = anil.calcAge;
// method borrowing yaptim, anil'daki methodu matildaya kopyaladim
matilda.calcAge();
// {year: 2017, calcAge: ƒ}
//  6

const f = anil.calcAge;
f();

const anil = {
  firstName: 'Anil',
  year: 1999,
  calcAge: function () {
    // console.log(this);
    console.log(2023 - this.year);

    // Solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(this); // undefined
    //   // console.log(this.year >= 1981 && this.year <= 1996);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2

    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    // Arrow function yaptım ve çalıştı çünkü hatırla, arrow function this keyword'ü parent scope'dan alıp kullanıyor

    isMillenial();
    // false
  },

  greet: () => console.log(`Hey ${this.firstName}`),
  greetNew: function () {
    console.log(`Hey ${this.firstName}`);
  },
};
anil.greet(); // Hey undefined
// But why? Cause, arrow function does not get its own this keyword. It looks for parent scope and the parent scope is global scope

// So, never ever use arrow function as a method!

anil.greetNew(); // Hey Anil
anil.calcAge();

// Arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
// Arguments(2) [2, 5, callee: (...), Symbol(Symbol.iterator): ƒ]
addExpr(2, 5, 8, 12);
// Arguments(4) [2, 5, 8, 12, callee: (...), Symbol(Symbol.iterator): ƒ]

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 11);
// script.js:184 Uncaught ReferenceError: arguments is not defined

// Summary: arguments keyword only exist in regular functions, NOT arrow functions.


let age = 23;
let oldAge = age;
age = 24;
console.log(age); // 24
console.log(oldAge); // 23

const me = {
  name: 'Anil',
  age: 23,
};

const friend = me;
friend.age = 20;
console.log('Friend:', friend);
// Friend: {name: 'Anil', age: 20}
console.log('Me: ', me);
// Me:  {name: 'Anil', age: 20}
*/

// Primitive Types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage: ', jessica);
// Before marriage:  {firstName: 'Jessica', lastName: 'Davis', age: 27}
console.log('After marriage: ', marriedJessica);
// After marriage:  {firstName: 'Jessica', lastName: 'Davis', age: 27}

// Copying objects
const jessicaNew = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Jim'],
};

const jessicaCopy = Object.assign({}, jessicaNew);
jessicaCopy.lastName = 'Davis';
console.log('Before marriage: ', jessicaNew);
// Before marriage:  {firstName: 'Jessica', lastName: 'Williams', age: 27}
console.log('After marriage: ', jessicaCopy);
// script.js:241 After marriage:  {firstName: 'Jessica', lastName: 'Davis', age: 27}

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
console.log('Before marriage: ', jessicaNew);
// Before marriage:  {firstName: 'Jessica', lastName: 'Williams', age: 27, family: Array(4)}
console.log('After marriage: ', jessicaCopy);
// After marriage:  {firstName: 'Jessica', lastName: 'Davis', age: 27, family: Array(4)}
