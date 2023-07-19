'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName} you are ${age}, born in ${birthYear}`;
    console.log(output);
    // You are 38, born in 1999

    if (birthYear >= 1981 && birthYear <= 2001) {
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
