'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/*
let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE (orijinal arrayi değiştirmiyor)
console.log(arr.slice(0, 3)); // [(3) ['a', 'b', 'c']
console.log(arr.slice(1)); // (4) ['b', 'c', 'd', 'e']
console.log(arr.slice(-1)); // ['e']
console.log(arr.slice()); // (5) ['a', 'b', 'c', 'd', 'e']
console.log([...arr]); // (5) ['a', 'b', 'c', 'd', 'e']

// SPLICE (orijinal arrayi değiştiriyor)
// console.log(arr.splice(2));
// (3) ['c', 'd', 'e']
console.log(arr);
// (2) ['a', 'b']
arr.splice(-1); // son elementi siliyorum
console.log(arr);
// [(4) ['a', 'b', 'c', 'd']
arr.splice(1, 2, 'x');
console.log(arr);
// (3) ['a', 'x', 'd']

// REVERSE (orijinal arrayi değiştiriyor)
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'f'];
console.log(arr2.reverse());
// (4) ['f', 'h', 'i', 'j']
console.log(arr2);
// (4) ['f', 'h', 'i', 'j']

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
// (9) ['a', 'b', 'c', 'd', 'e', 'f', 'h', 'i', 'j']
console.log([...arr, ...arr2]);
// (9) ['a', 'b', 'c', 'd', 'e', 'f', 'h', 'i', 'j']

// JOIN
console.log(letters.join('-'));
// a-b-c-d-e-f-h-i-j


const arr = [23, 11, 64];
// console.log(arr[0]); // 23
console.log(arr.at(0)); // 23

// solving the problem of getting last element TRADITONAL WAYS
console.log(arr[arr.length - 1]); // 64
console.log(arr.slice(-1)[0]); // 64

// with at method
console.log(arr.at(-1)); // 64
console.log(arr.at(-2)); // 11

console.log('Anil'.at(0)); // A
console.log('Anil'.at(-1)); // l


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}
// Movement 1: You deposited 200
// Movement 2: You deposited 450
// ...

console.log('-----------FOR EACH-------------');
// Lets write exactly same functionality code with forEach() method
// ------------------------
// forEach() parameters: (ORDER SO IMPORTANT!)
// (element, index, array)
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});
// Movement 1: You deposited 200
// Movement 2: You deposited 450
// ...
*/

// Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});
// USD: United States dollar
// EUR: Euro
// GBP: Pound sterling

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
// Set(3) {'USD', 'GBP', 'EUR'}
currenciesUnique.forEach(function (value, _value, map) {
  console.log(`${value}: ${_value}`);
});
// USD: USD
// GBP: GBP
// EUR: EUR
