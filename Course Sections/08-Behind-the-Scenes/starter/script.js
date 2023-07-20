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
*/

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
