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
*/

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
