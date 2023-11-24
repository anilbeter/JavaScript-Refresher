'strict mode';

const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

budget[0].value = 10000;
// 0: {value: 10000, description: 'Sold old TV 📺', user: 'jonas'}
// -> Freeze sadece first level etki ediyor, arrayin içindeki değeri değiştirebilirim fakat dışarıdan yeni bir veri ekleyemem

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});
spendingLimits.jay = 200;
console.log(spendingLimits);
// {jonas: 1500, matilda: 100}
// It didn't work cuz' it has been freezed

const getLimit = user => spendingLimits?.[user] ?? 0;

const addExpense = function (value, description, user = 'jonas') {
  // if (!user) user = 'jonas';
  user = user.toLowerCase();

  if (value <= getLimit(user)) {
    budget.push({ value: -value, description, user });
  }
};
// addExpense(10, 'Pizza 🍕');
// addExpense(100, 'Going to movies 🍿', 'Matilda');
// addExpense(200, 'Stuff', 'Jay');

const check = function () {
  for (const entry of budget) {
    if (entry.value < -getLimit(entry.user)) entry.flag = 'limit';
  }
};
check();

const logBigExpenses = function (bigLimit) {
  let output = '';
  for (const entry of budget)
    output +=
      entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : '';

  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};

console.log(budget);
logBigExpenses(1000);
