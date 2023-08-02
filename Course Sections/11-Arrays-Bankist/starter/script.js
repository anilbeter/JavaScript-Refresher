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

const displayMovements = function (movements) {
  // .innerHTML koduyla index.html dosyasinda tanimladigim containerMovements i temizliyorum. Bu sayede html dosyasinda tanimladigim movements-row lar gozukmeyecek, sadece buradan aldigim datalar gozukecek.
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);

const user = 'Anil Badly Beter'; // abb'yi elde etmek istiyorum
// const username = user
//   .toLowerCase()
//   .split(' ')
//   .map(name => name[0])
//   .join('');
// console.log(username);
// abb

// let's put this code into a function
const createUsernames = accs => {
  //forEach kullanıyorum çünkü yeni bir array yaratmak istemiyorum, sadece var olan arrayi modife etmek istiyorum. Yeni bir array oluşturmak isteseydim map methodunu kullanacaktım.
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
// bu fonksiyonla beraber her account objectine (account1, account2 etc.) yeni bir property/key ekliyorum(username). ve bu username keyini isim ve soyismin baş harflerine eşitliyorum. örnek olarak: account1 {owner: "Anil Beter"} ---> {username: "ab"}
createUsernames(accounts);

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

Coding Challenge #1
/////////////////////////////
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.
Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the first and the last two dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets
Test data:
 Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
 Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
Hints: Use tools from all lectures in this section so far 😉
GOOD LUCK 😀


const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

const checkDogs = function (dogsJulia, dogsKate) {
  // First Task
  const juliaNew = dogsJulia.slice();
  juliaNew.splice(0, 1);
  juliaNew.splice(-2);
  // Second task
  const totalDogs = juliaNew.concat(dogsKate);
  // Third task
  totalDogs.forEach(function (age, i) {
    const check =
      age >= 3 ? `is an adult, and is ${age} years old` : `is still a puppy 🐶`;
    console.log(`Dog number ${i + 1} ${check}`);
  });
};

checkDogs(dogsJulia, dogsKate);


// map method

const eurToUsd = 1.1;
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });
const movementsUSD = movements.map(mov => mov * eurToUsd);

console.log(movements);
// (8) [200, 450, -400, 3000, -650, -130, 70, 1300]
console.log(movementsUSD);
// (8) [220.00000000000003, 495.00000000000006, -440.00000000000006, 3300.0000000000005, -715.0000000000001, -143, 77, 1430.0000000000002]

// Lets write same thing with for of loop
const movementsUSDfor = [];
for (const mov of movements) {
  movementsUSDfor.push(mov * eurToUsd);
}
console.log(movementsUSDfor);
// (8) [220.00000000000003, 495.00000000000006, -440.00000000000006, 3300.0000000000005, -715.0000000000001, -143, 77, 1430.0000000000002]

const movementsDescriptions = movements.map(
  (mov, i, arr) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions);
// (8) ['Movement 1: You deposited 200', 'Movement 2: You deposited 450', 'Movement 3: You withdrew 400', 'Movement 4: You deposited 3000', 'Movement 5: You withdrew 650', 'Movement 6: You withdrew 130', 'Movement 7: You deposited 70', 'Movement 8: You deposited 1300']
*/
