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

const calcDisplayBalance = function (acc) {
  // acc stands for accumulator
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} EUR`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;
  const outcomes = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = interest;
};

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

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);
  // Display balance
  calcDisplayBalance(acc);
  // Display summary
  calcDisplaySummary(acc);
};

// Event Handlers
let currentAccount;
btnLogin.addEventListener('click', function (event) {
  //prevent form from submitting
  event.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message (show only the first name of owner)
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin;
    //inputLoginPin.blur() kodu ile pin de yanıp sönen mouse cursorunu ortadan kaldırıyorum
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  // clear input fields
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

// Delete account
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    // delete account
    accounts.splice(index, 1);

    // hide UI
    containerApp.style.opacity = 0;

    // change welcome message
    labelWelcome.textContent = 'Log in to get started';
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

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


// Filter method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(deposits);
// (5) [200, 450, 3000, 70, 1300]

//same code with for of loop
const onlyDepositsFor = [];
for (const mov of movements) {
  if (mov > 0) {
    onlyDepositsFor.push(mov);
  }
}
console.log(onlyDepositsFor);
// (5) [200, 450, 3000, 70, 1300]

// pop challenge - create an array of the withdrawals
const onlyWithdrawals = movements.filter(mov => mov < 0);
console.log(onlyWithdrawals);
// (3) [-400, -650, -130]


// Reduce method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// accumulator-- > SNOWBALL;
const balance1 = movements.reduce(function (
  accumulator,
  current,
  index,
  array
) {
  console.log(
    `Iteration ${index} Accumulator: ${accumulator} and current: ${current}`
  );
  return accumulator + current;
},
0);
console.log(balance1);
// Iteration 0 Accumulator: 0 and current: 200
// Iteration 1 Accumulator: 200 and current: 450
// Iteration 2 Accumulator: 650 and current: -400

// lets write reduce method with arrow function (much simpler way!)
const balance = movements.reduce((acc, cur) => acc + cur);
console.log(balance);
// 3840

// same code with for loop
let sum = 0;
for (const mov of movements) {
  sum += mov;
}
console.log(sum);
// 3840

// Get maximum value
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const max = movements.reduce((acc, mov) => {
  console.log(`accumulator: ${acc} and current movement: ${mov}`);
  if (acc > mov) {
    return acc;
  } else {
    return mov;
  }
}, movements[0]);

console.log(max);
// accumulator: 200 and current movement: 200
// accumulator: 200 and current movement: 450
// accumulator: 450 and current movement: -400
// accumulator: 450 and current movement: 3000
// accumulator: 3000 and current movement: -650
// accumulator: 3000 and current movement: -130
// accumulator: 3000 and current movement: 70
// accumulator: 3000 and current movement: 1300
// 3000

//////////////////////////////////////////////////////////////////////////////////////////
Coding Challenge #2
Let's go back to Julia and Kate's study about dogs. This time, they want to convert
dog ages to human ages and calculate the average age of the dogs in their study.
Your tasks:
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets
Test data:
 Data 1: [5, 2, 4, 1, 15, 8, 3]
 Data 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK 😀


const calcAverageHumanAge = function (ages) {
  // map'teki array fonksiyonu doğru yazmadığım için bugı bulmakla uğraştım, next time daha dikkatli ol!!!
  const humanAges = ages.map(age => (age <= 2 ? age * 2 : 16 + age * 4));
  const adults = humanAges.filter(age => age >= 18);
  const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
  return average;
};

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
console.log(avg1);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg2);


// The Magic of Chaining Methods
const eurToUSD = 1.1;
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUSD)
  // FOR DEBUG (use arr and console it to see whats going on previous operation)
  // =====================================
  // .map((mov, i, arr) => {
  //   console.log(arr);
  //   return mov * eurToUSD;
  // })
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);
// 5522.000000000001
/////////////////////////////////////////////////
Coding Challenge #3
Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time as an arrow function, and using chaining!
Test data:
 Data 1: [5, 2, 4, 1, 15, 8, 3]
 Data 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK 😀

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? age * 2 : 16 + age * 4));
  const adults = humanAges.filter(age => age >= 18);
  const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
  return average;
};
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

// Challenged function (rewrite with arrow and use chaining methods)
const calcAverageHumanAgeArrow = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const avg2 = calcAverageHumanAgeArrow([5, 2, 4, 1, 15, 8, 3]);
console.log(avg1);
console.log(avg2);

// NOTE FOR MYSELF: The "reduce" method shouldn't be so hard. repeat!!!!!!!!


// The find method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// find method not return a new array
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(firstWithdrawal);
// -400

// differetens between filter and find method:
// filter returns all the elements, find method only returns first one
// filter method returns new array, find only returns element itself (not an array)

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);
// {owner: 'Jessica Davis', movements: Array(8), interestRate: 1.5, pin: 2222, username: 'jd'}
*/

// EQUALITY
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements.includes(-130)); // true

// some method (CONDITION)
const anyDeposits = movements.some(mov => mov > 5000);
console.log(anyDeposits); // false;
