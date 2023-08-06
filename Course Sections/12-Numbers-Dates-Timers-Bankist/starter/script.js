'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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
// Functions

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out.toFixed(2))}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

// FAKE ALWAYS LOGGED IN
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;

const now = new Date();
const day = `${now.getDate()}`.padStart(2, '0');
const month = `${now.getMonth() + 1}`.padStart(2, 0);
const year = now.getFullYear();
const hour = now.getHours();
const min = now.getMinutes();
labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

// day/month/year

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
/*
console.log(23 === 23.0);
// true

// Base 10 - 0 to 9. 1/10 = 0.1. 3/10 = 3.33333
// Binary base 2 - 0 1

// Conversion string to num
console.log(Number('23'));
console.log(+'23');

// Parsing
console.log(Number.parseInt('30px', 10)); // 30
console.log(Number.parseInt('e30px', 10)); // NaN

console.log(Number.parseFloat('2.5rem')); // 2.5
// old school way
console.log(parseFloat('2.5rem')); // 2.5

// check if value is NaN
console.log(Number.isNaN('23')); // false
console.log(Number.isNaN(23)); // false
console.log(Number.isNaN(+'x23')); // true
console.log(Number.isNaN(23 / 0)); // false

// better way to check is it number or not
console.log(Number.isFinite(20)); //true
console.log(Number.isFinite('23')); //false
console.log(Number.isFinite('anil')); //false

console.log(Number.isInteger(23)); // true
console.log(Number.isInteger(23.0)); // true


console.log(Math.sqrt(64));
// 8
console.log(25 ** (1 / 2));
// 5

console.log(Math.max(5, 18, 23, 11, 2));
// 23
console.log(Math.max(5, 18, '23', 11, 2));
// 23

console.log(Math.min(5, 2, 23, 50));
// 2

// r si 10px olan dairenin alanı (pi * r^2)
console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
// 0..1 -> 0...(max - min) -> min... (max - min) + min -> min...max
console.log(randomInt(10, 20));

// Rounding integers

console.log(Math.round(23.3)); // 23
console.log(Math.round(23.9)); // 24

console.log(Math.ceil(23.3)); // 24
console.log(Math.ceil(23.9)); // 24

console.log(Math.floor(23.3)); // 23
console.log(Math.floor('23.9')); // 23

console.log(Math.trunc(23.3)); // 23

console.log(Math.trunc(-23.3)); // -23
console.log(Math.floor(-23.3)); // -24

// Rounding decimals
console.log((2.7).toFixed(0)); // "3"
// toFixed always returns a string
console.log((2.7).toFixed(3)); // "2.700"
console.log(+(2.345).toFixed(2)); // 2.35


// Remainder Operator
console.log(5 % 2); // 1
console.log(8 % 3); // 2
console.log(6 % 2); // 0
console.log(7 % 2); // 1

const isEven = n => n % 2 === 0;
console.log(isEven(4)); // true

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    if (i % 2 === 0) row.style.backgroundColor = 'orangered'; // 0, 2, 4, 6
    if (i % 3 === 0) row.style.backgroundColor = 'blue'; // 0, 3, 6, 9, 12
  });
});
// Nth



// 287,460,000,000
const diameter = 284_460_000_000;
console.log(diameter); // 284460000000

const priceCents = 345_99;
console.log(priceCents); // 34599

const transferFee = 15_00; // $15.00

const PI = 3.141_5;
console.log(PI); // 3.1415

// BE AWARE
console.log(Number('230_000')); // NaN
console.log(parseInt('230_000')); // 230


console.log(2 ** 53 - 1); // 9007199254740991 (this is the biggest number that javascript can safely represent)
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

console.log(488234829423942394234923842392349);
// 4.882348294239424e+32

// BigInt yapmak için sonuna n koymam yeterli:
console.log(488234829423942394234923842392349n);
// 488234829423942394234923842392349n

console.log(BigInt(48823482942394239));
// 48823482942394240n

// Operations
console.log(10000n + 10000n); // 20000n
console.log(4823842394234232348n * 174218423849234n); // 840402218820603224109261277821432n
// console.log(Math.sqrt(16n));
// ERROR!

// Exceptions
console.log(20n > 15); // true
console.log(20n === 20); // false
console.log(typeof 20n); // bigint
console.log(20n == 20); // true

console.log(813194982342342343244239n + ' is REALLY big!!!');
// 813194982342342343244239 is REALLY big!!!

// Divisions
console.log(10n / 3n); // 3n
console.log(11n / 3n); // 3n


// Create a date
const now = new Date();
console.log(now);
// Sun Aug 06 2023 09:59:26 GMT+0300 (GMT+03:00)

console.log(new Date('December 24, 2015'));
// Thu Dec 24 2015 00:00:00 GMT+0200 (GMT+03:00)

console.log(new Date(account1.movementsDates[0]));
// Tue Nov 19 2019 00:31:17 GMT+0300 (GMT+03:00)

console.log(new Date(2037, 10, 19, 15, 23, 5));
// Thu Nov 19 2037 15:23:05 GMT+0300 (GMT+03:00)
console.log(new Date(2037, 10, 31));
// Tue Dec 01 2037 00:00:00 GMT+0300 (GMT+03:00)

console.log(new Date(0));
// Thu Jan 01 1970 02:00:00 GMT+0200 (GMT+03:00)

// three days later (I'm converting 3 days -> 3 days.milliseconds)
console.log(new Date(3 * 24 * 60 * 60 * 1000));
// Sun Jan 04 1970 02:00:00 GMT+0200 (GMT+03:00)

console.log('====================WORKING WITH DATES======================');
// Working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
// Thu Nov 19 2037 15:23:00 GMT+0300 (GMT+03:00)
console.log(future.getFullYear());
// 2037
console.log(future.getMonth());
// 10 --> tıpkı array gibi aylar da 0 tabanlı. yani 10 aslında 11. ay demek, bizim örneğimizde november(kasım)
console.log(future.getDate());
// 19
console.log(future.getDay()); // it gives day of the week. 0 -> sunday, 4 -> thursday
console.log(future.getHours());
// 15
console.log(future.getMinutes());
// 23
console.log(future.getSeconds());
// 0
console.log(future.toISOString());
// 2037-11-19T12:23:00.000Z
console.log(future.getTime());
// 2142246180000 --> 2142246180000 millisecond have passed since January 1, 1970

console.log(new Date(2142246180000));
// Thu Nov 19 2037 15:23:00 GMT+0300 (GMT+03:00)

console.log(Date.now());
// 1691306992854

future.setFullYear(2040);
console.log(future);
// Mon Nov 19 2040 15:23:00 GMT+0300 (GMT+03:00)
*/
