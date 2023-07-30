'use strict';

/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassenger = 1,
  price = 199 * numPassenger
) {
  // ES5
  // numPassenger = numPassengers || 1;
  // price = price || $199;

  const booking = {
    flightNum,
    numPassenger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
// {flightNum: 'LH123', numPassenger: 1, price: 199}
createBooking('LH23', 2, 99);
// {flightNum: 'LH23', numPassenger: 2, price: 99}
createBooking('KEK', 5);
// {flightNum: 'KEK', numPassenger: 5, price: 995}
createBooking('ADR23', undefined, 1000);
// {flightNum: 'ADR23', numPassenger: 1, price: 1000}


const flight = 'LH234';
const anil = {
  name: 'Anil Beter',
  passport: 28489535,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 28489535) {
    alert('Check in');
  } else {
    alert('Wrong passport!');
  }
};

checkIn(flight, anil);
console.log(flight);
// LH234
console.log(anil);
// {name: 'Mr. Anil Beter', pasport: 28489535}

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};

newPassport(anil);
checkIn(flight, anil);
// Wrong passport!


// Create higher-order function: part1
//// Functions Accepting Callback Functions
const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
// Original string: JavaScript is the best!
// Transformed string: JAVASCRIPT is the best!
// Transformed by: upperFirstWord

transformer('JavaScript is the best!', oneWord);
// Original string: JavaScript is the best!
// Transformed string: javascriptisthebest!
// Transformed by: oneWord

// JS uses callback all the time
const writeToConsole = function () {
  console.log('🌃');
};
document.body.addEventListener('click', writeToConsole);
// sayfada herhangi bir yere her tıkladığımda console da 🌃 bu gözükücek

//We'll learn forEach() function later!
['Anil', 'Billie', 'Martha'].forEach(writeToConsole);
// 3🌃


// Higher-Order Function: Part2
//// Functions Returning Functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Anil');
// Hey Anil
greeterHey('Martha');
// Hey Martha

greet('Hello')('Anil');
// Hello Anil

// Rewrite above function with arrow
const greetArrow = greeting => name => console.log(`${greeting} ${name}`);

greetArrow('Heyoo')('Anil!');
// Heyoo Anil!


const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {},
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Anil Beter');
// Anil Beter booked a seat on Lufthansa flight LH239
lufthansa.book(567, 'John Smith');
// John Smith booked a seat on Lufthansa flight LH567

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// DOES NOT work
// book(23, 'Sarah');

// Call method
// call(eurowings, ...)  eurowing yazdığım için this keywordu şu an eurowings i işaret ediyor
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);
// bookings: Array(1)
// 0: {flight: 'EW23', name: 'Sarah Williams'}

book.call(lufthansa, 239, 'Billie Sky');
console.log(lufthansa);
// bookings: Array(3)
// 0: {flight: 'LH239', name: 'Anil Beter'}
// 1: {flight: 'LH567', name: 'John Smith'}
// 2: {flight: 'LH239', name: 'Billie Sky'}

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'SAL',
  bookings: [],
};

book.call(swiss, 580, 'Mary Cooper');
console.log(swiss);
// bookings: Array(1)
// 0: {flight: 'SAL580', name: 'Mary Cooper'}

// Apply method [array]
const flightData = [589, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

// Exactly same thing with apply method, and you should pref use only call method and spread operator for spread out arguments an array
book.call(swiss, ...flightData);

// Bind Method
// book.call(eurowings, 23, "Sarah Williams");

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(246, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
// Now bookEW23() only needs name, i already predefined flightNum which is 23
bookEW23('Anil LA');
// Anil LA booked a seat on Eurowings flight EW23

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  // {airline: 'Lufthansa', iataCode: 'LH', bookings: Array(3), planes: 300, book: ƒ, …}

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200)); // 220

const addVAT = addTax.bind(null, 0.23);
// rate i default olarak 23 yaptım. addVAT fonksiyonunda ne yazarsam tax yüzdesi her zaman %23
console.log(addVAT(100)); // 123

// CHALLENGE, write whole function with technique that function returning another function
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100)); // 123
console.log(addVAT2(200)); // 246

//////////////////////
////////////////////// 
Coding Challenge #1
======================
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter 'poll' object below.
Your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this: 
    What is your favourite programming language?
    0: JavaScript
    1: Python
    2: Rust
    3: C++
    (Write option number)
  1.2. Based on the input number, update the 'answers' array property. For example, if the option is 3, increase the value at position 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g. answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each
'registerNewAnswer' method call.
5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll object! So what should the this keyword look like in this situation?
Bonus: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
object! So what should the this keyword look like in this situation?
Test data for bonus:
 Data 1: [5, 2, 3]
 Data 2: [1, 5, 3, 9, 6, 1]

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);
    // [START] short-circuiting: && kullanıyorum ve && kullandığım için bulduğu ilk falsy value'yu dönüş yapıcak, doğru olanları ignorelayacak. Eğer hepsi doğruysa en sonuncu value'yu çalıştırıcak. burada 3 value de doğru olduğu için this.answers[]++, kodunu dönüş yapıcak en sonda olduğu için.
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;
    // [END] short-circuiting
    this.displayResult();
    // (4) [0, 1, 1, 0]
    this.displayResult('string');
    // Poll results are 0, 1, 1, 0
  },
  displayResult(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResult.call({ answers: [5, 2, 3] }, 'string');
// Poll results are 5, 2, 3
poll.displayResult.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
// Poll results are 1, 5, 3, 9, 6, 1
poll.displayResult.call({ answers: [1, 5, 3, 9, 6, 1] });
// (6) [1, 5, 3, 9, 6, 1]
*/

const runOnce = function () {
  console.log('This will neven run again');
};
runOnce();

// Immediately Invoked Function Expressions (IIFE)
(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();
// This will never run again

// console.log(isPrivate);
// script.js:321 Uncaught ReferenceError: isPrivate is not defined

(() => console.log('This will ALSO never run again'))();
// This will ALSO never run again

{
  const isPrivate = 23;
  var notPrivate = 24;
}
console.log(notPrivate);
// 24
console.log(isPrivate);
// Uncaught ReferenceError: isPrivate is not defined
