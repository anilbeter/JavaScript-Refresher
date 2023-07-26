'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
      // Order received! Garlic Bread and Risotto will be delivered to Ice St. at 23.23
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  // ...otherIngredients = optinal, not neccessary
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//////////////////////////////////
// Working with String
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]); // A
console.log(plane[1]); // 3
console.log(plane[2]); // 2
console.log('B737'[0]); // 0

console.log(airline.length); // 16

// String methods
console.log(airline.indexOf('r')); // 6
console.log(airline.lastIndexOf('r')); // 10
console.log(airline.indexOf('Portugal')); // 8
console.log(airline.indexOf('portugal')); // -1 (not found)

console.log(airline.slice(4)); // Air Portugal
// 4. index dahil 4'ten sonrasını alıyor
console.log(airline.slice(4, 7)); // Air
// 4 dahil, 7 dahil değil, length ---> 7-4 = 3

// Extract first word without knowing any indexes
console.log(airline.slice(0, airline.indexOf(' '))); // TAP
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Portugal

console.log(airline.slice(-2)); // al
console.log(airline.slice(1, -1)); // AP Air Portuga

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat');
  else console.log('You got lucky😎');
};
checkMiddleSeat('11B'); // You got the middle seat
checkMiddleSeat('23C'); // You got lucky😎
checkMiddleSeat('3E'); // You got the middle seat
// BTS: Stringler primitive oldukları için normal şartlarda method uygulayamamam gerekli, ama javascript benim için arka planda stringi Object'e dönüştürüyor, işlem bittikten sonra tekrardan orijinal hali olan primitive e dönüştürüyor.return as primitive

/*
////////////////////////////////////////////////
// Challenge #3
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);
// First task
const arrayEvents = [...gameEvents.values()];
console.log(arrayEvents);
// (11) ['⚽ GOAL', '🔁 Substitution', '⚽ GOAL', '🔁 Substitution', '🔶 Yellow card', '🔴 Red card', '🔁 Substitution', '🔁 Substitution', '⚽ GOAL', '⚽ GOAL', '🔶 Yellow card']
const events = [...new Set(arrayEvents)];
console.log(events);
// (4) ['⚽ GOAL', '🔁 Substitution', '🔶 Yellow card', '🔴 Red card']

// Second task
gameEvents.delete(64);
console.log(gameEvents);

// Third task
const time = [...gameEvents.keys()].pop(); // pop() methodu ile Arrayin son elemanını seçtim
console.log(time); // 92
console.log(
  `An event happened, on avarage, every ${time / gameEvents.size} minutes`
);

// Fourth task
for (const [min, event] of gameEvents) {
  console.log(
    `${min <= 45 ? '[FIRST HALF]' : '[SECOND HALF]'} ${min}: ${event}`
  );
}


/////////////////////////////////
Coding Challenge #3
Let's continue with our football betting app! This time, we have a map called 'gameEvents' (see below) with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time). Your tasks: 
1. Create an array 'events' of the different game events that happened (no duplicates) 
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽ GOAL
GOOD LUCK 😀
//////////////////////////////////////////
// Maps: Iteration
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again!'],
]);
console.log(question);

// Convert object to map
console.log(Object.entries(openingHours));
//(3) [Array(2), Array(2), Array(2)]
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);
// Map(3) {'thu' => {…}, 'fri' => {…}, 'sat' => {…}}

// Quiz app
console.log(question.get('question'));
// What is the best programming language in the world?
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
// Answer 1: C
// Answer 2: Java
// Answer 3: JavaScript
// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(question.get(question.get('correct') === answer));
// 3 yazarsam console da True çıkıyor, 3 dışında herhangi bir şey yazarsam Try again! çıkıyor. Çünkü maps de true yu correct, false u try again! diye ayarladık (key, value)

// Convert map to array
console.log([...question]);
// (7) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]

console.log([...question.entries()]);
// [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
console.log([...question.keys()]);
// ['question', 1, 2, 3, 'correct', true, false]
console.log([...question.values()]);
// ['What is the best programming language in the world?', 'C', 'Java', 'JavaScript', 3, 'Correct', 'Try again!']


///////////////////////////////////////////
// Maps: Fundamentals
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));
// Map(3) {'name' => 'Classico Italiano', 1 => 'Firenze, Italy', 2 => 'Lisbon, Portugal'}

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest.get('name'));
// Classico Italiano
console.log(rest.get(true));
// We are open :D

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); // 11 < time(21) < 23 (true)
// We are open :D

// We can also check if a map contains a certain key
console.log(rest.has('categories'));
// true
rest.delete(2);
console.log(rest);
// Map(8) {'name' => 'Classico Italiano', 1 => 'Firenze, Italy', 'categories' => Array(4), 'open' => 11, 'close' => 23, …}
// [[Entries]]
// 0: {"name" => "Classico Italiano"}
// 1: {1 => "Firenze, Italy"}
// 2: {"categories" => Array(4)}
// 3: {"open" => 11}
// 4: {"close" => 23}
// 5: {true => "We are open :D"}
// 6: {false => "We are closed :("}
// 7: {Array(2) => "Test"}

// rest.clear(); (delete all keys in the map)

rest.set([1, 2], 'Test');
console.log(rest);
// Map(8) {'name' => 'Classico Italiano', 1 => 'Firenze, Italy', 'categories' => Array(4), 'open' => 11, 'close' => 23, …}
// [[Entries]]
// 0: {"name" => "Classico Italiano"}
// 1: {1 => "Firenze, Italy"}
// 2: {"categories" => Array(4)}
// 3: {"open" => 11}
// 4: {"close" => 23}
// 5: {true => "We are open :D"}
// 6: {false => "We are closed :("}
// 7: {Array(2) => "Test"}
console.log(rest.size);
// 8


//////////////////////////////////////////
// Sets
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);
// Set(3) {'Pasta', 'Pizza', 'Risotto'}

console.log(new Set('Anil'));
// Set(4) {'A', 'n', 'i', 'l'}

console.log(ordersSet.size);
// 3
console.log(ordersSet.has('Pizza'));
// true
console.log(ordersSet.has('Bread'));
// false
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
console.log(ordersSet);
// Set(4) {'Pasta', 'Pizza', 'Risotto', 'Garlic Bread'}
ordersSet.delete('Risotto');
console.log(ordersSet);
// Set(3) {'Pasta', 'Pizza', 'Garlic Bread'}
// ordersSet.clear();
// console.log(ordersSet);
//Set(0) {size: 0}
console.log(ordersSet[1]);
// undefined
// we got undefined cause' in SETS there are actually no indexes!!!
// so, there is no way of getting values out of a set
// Because there is no need for getting values out of a set. If you neet it, then just use an array

// Sets are also iterable
for (const order of ordersSet) console.log(order);
// Pasta
// Pizza
// Garlic Bread

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
// (3) ['Waiter', 'Chef', 'Manager']
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);
// 3

console.log(new Set('anilbeter').size);
// 8 (anilbeter --> 8 harf)


/////////////////////////////////////////
// CHALLENGE 2
// 1)
// Array'lerde entries() methodu kullanımı
for (const [i, goal] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${goal}`);
}

// 2)
const odds = Object.values(game.odds);
let sum = 0;
for (const odd of odds) {
  sum += odd;
}
const avg = sum / odds.length;
console.log(avg);

//3 -- ÇOK SAĞLAM CHALLENGE- TEKRAR ET KENDİN TEKRAR ÇÖZMEYİ DENE
// Object'lerde entries() metodu kullanımı. Object olduğu için Object.entries(game.odds) synaxtini kullandım. ÖNEMLİ!
for (const [team, odd] of Object.entries(game.odds)) {
  // console.log(team, odd);
  //  team1 1.33
  //  x 3.25
  //  team2 6.5
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}


Coding Challenge #2
Let's continue with our football betting app! Keep using the 'game' variable from before.
Your tasks:
1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski") 
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). Hint: Note how the odds and the game objects have the same property names 😉
4. Bonus: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
{
Gnarby: 1,
Hummels: 1,
Lewandowski: 2
}
GOOD LUCK 😀

///////////////////////////////////////////////
Looping Objects: Object Keys, Values, and Entries
// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);
// (3) ['thu', 'fri', 'sat']

let openStr = `We are open on ${properties.length} days: `;
// We are open on 3 days

for (const day of properties) {
  // console.log(day);
  //  thu
  //  fri
  //  sat
  openStr += `${day}, `;
}
console.log(openStr);
// We are open on 3 days: thu, fri, sat,

// Property VALUES
const values = Object.values(openingHours);
console.log(values);
// (3) [{…}, {…}, {…}]
// 0: {open: 12, close: 22}
// 1: {open: 11, close: 23}
// 2: {open: 0, close: 24}
// length: 3
// [[Prototype]]: Array(0)

// Entire object
const entries = Object.entries(openingHours);
console.log(entries);
// (3) [Array(2), Array(2), Array(2)]
// 0: (2) ['thu', {…}]
// 1: (2) ['fri', {…}]
// 2: (2) ['sat', {…}]

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
  //  On thu we open at 12 and close at 22
  //  On fri we open at 11 and close at 23
  //  On sat we open at 0 and close at 24
}


/////////////////////////////////////////////
Optional Chaining
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon.open);
// script.js:61 Uncaught TypeError: Cannot read properties of undefined (reading 'open')

// WITH optional chaining

// only if monday(optional) exist, then open property will be read from there
console.log(restaurant.openingHours.mon?.open);
// undefined

//now if restaurant.openingHours does not even exist, then the Monday property will not even be read
console.log(restaurant.openingHours?.mon?.open);
// undefined

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  // restaurant.openingHourd[day] = openingHours.mon, etc.
  console.log(`On ${day}, we open at ${open}`);
  //  On mon, we open at closed
  //  On tue, we open at closed
  //  On wed, we open at closed
  //  On thu, we open at 12
  //  On fri, we open at 11
  //  On sat, we open at 0
  //  On sun, we open at closed
}

// Methods

// I check if order method exist or not with optional chaining (?.)
console.log(restaurant.order?.(0, 1) ?? 'Method does not exits'); // (2) ['Focaccia', 'Pasta']

console.log(restaurant.orderRisetto?.(0, 1) ?? 'Method does not exits'); // Method does not exits

// Arrays
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];

console.log(users[0]?.name ?? 'User array is empty');
// Jonas
console.log(users[1]?.name ?? 'User array is empty');
// User array is empty

// if (users.length > 0) console.log(users[0].name);
// else console.log('User array empty');
// ---> Jonas


////////////////////////////////
For-of loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);
// Focaccia
// Bruschetta
// Garlic Bread
// Caprese Salad
// Pizza
// Pasta
// Risotto

for (const [i, el] of menu.entries()) {
  // console.log(item);
  //  (2)[0, 'Focaccia']
  //  (2)[1, 'Bruschetta']
  //  (2)[2, 'Garlic Bread']
  //  (2)[3, 'Caprese Salad']
  //  (2)[4, 'Pizza']
  //  (2)[5, 'Pasta']
  //  (2)[6, 'Risotto']

  console.log(`${i + 1}: ${el}`);
  // 1: Focaccia
  // 2: Bruschetta
  // 3: Garlic Bread
  // 4: Caprese Salad
  // 5: Pizza
  // 6: Pasta
  // 7: Risotto
}


// CHALLENGE

// Coding Challenge #1
// We're building a football betting app (soccer for my American friends 😅)!
// Suppose we get data from a web service about a certain game ('game' variable on next page). In this challenge we're gonna work with that data.
// Your tasks:
// 1. Create one player array for each team (variables 'players1' and 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic' 
// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in) 
// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.
// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
// Then, call the function again with players from game.scored
// GOOD LUCK 😀

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1
const [players1, players2] = game.players;
console.log(players1, players2);
// 2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// 5
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);
// IMPORTANT! Nested Destructring

// 6
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};

printGoals('Anil', 'Adr', 'Cody'); // 3 goals were scored
printGoals('Anil', 'Adr', 'Jinx', 'Sept', 'Lucian'); // 5 goals were scored
// Function must be work both way, use rest parameters
printGoals(...game.scored); // 4 goals were scored

// 7
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');


/////////////////////////////////////////////////////
const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giavonni Rossi',
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// OR assignment operator
// Basically this operator assigns a variable to a variable if that variable is currently FALSY
// rest1.numGuests ||= 10;
// Exactly same with rest1.numGuests = rest1.numGuests || 10; but in a more concise way
// rest2.numGuests ||= 10;

// nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// output --> {name: 'Capri', numGuests: 0, owner: undefined}
// rest2.owner = rest2.owner && '<ANONYMOUS>';
// output --> {name: 'La Piazza', owner: '<ANONYMOUS>', numGuests: 10}
rest1.owner &&= '<ANONYMOUS>';
// {name: 'Capri', numGuests: 0}
rest2.owner &&= '<ANONYMOUS>';
// {name: 'La Piazza', owner: '<ANONYMOUS>', numGuests: 10}

console.log(rest1);
//output--> {name: 'Capri', numGuests: 0}
console.log(rest2);
//output--> {name: 'La Piazza', owner: 'Giavonni Rossi', numGuests: 10}


///////////////////////////////
// Nullish Coalescing Operator (??)
restaurant.numGuests = 0;
const guests2 = restaurant.numGuests || 10;
console.log(guests2); // 10, but I have 0 guest, how could I solve it?

//Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect); // 0


/////////////////////////////////////////
Short Circuiting (||) and (&&)


console.log('----- OR ------');
// Use ANY data type, return ANY data type, short-circuiting
// (OR) Short circuiting means that if the first value is a truthy value, it will immediately return that first value
console.log(3 || 'Anil'); // 3
console.log('' || 'Anil'); //Anil
console.log(true || 0); // true
console.log(undefined || null); // null

console.log(undefined || 0 || '' || 'Hello' || 23 || null);
// Hello

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1); // 23

const guests2 = restaurant.numGuests || 10;
console.log(guests2); // 23

console.log('----- AND ------');
console.log(0 && 'Anil'); // 0
// (AND) Short circuiting means that if the first value is a falsy value, it will immediately return that first value
console.log(23 && 'Anil'); // Anil (both value is truthy and returns that last value)

console.log('Hello' && 23 && null && 'Anil'); // null

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('muhsrooms', 'spinach');
}

// Simple way
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
// NOTE: That not means you should always short circuit instead if-else!


/////////////////////////////////
Rest Pattern and Parameters
// 1)Destructring

// SPREAD, because on RIGHT side of =
// Spread: unpack an array
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
// Rest: pack elements into an array
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // 1 2 (3) [3, 4, 5]

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);
// Pizza Risotto (4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// Objects
const { sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays);
// {thu: {…}, fri: {…}}

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(2, 3); // 5
add(5, 3, 7, 2); // 17
add(8, 2, 5, 4, 3, 5, 6); // 33

const x = [23, 5, 7];
add(...x); // 35

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// mushrooms ---> main ingredient
// (3) ['onion', 'olives', 'spinach'] ---> optioanl stuff

restaurant.orderPizza('mushrooms');
// mushrooms
// []


///////////////////////////////////////
The Spread Operator(...)
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr); // (5) [1, 2, 7, 8, 9]

// Good way with spread operator(...)
const newArr = [1, 2, ...arr];
console.log(newArr); // (5) [1, 2, 7, 8, 9]

console.log(...newArr); // 1 2 7 8 9

const newMenu = [...restaurant.mainMenu, 'Doner'];
console.log(newMenu); // (4) ['Pizza', 'Pasta', 'Risotto', 'Doner']

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];
// (4) ['Pizza', 'Pasta', 'Risotto', 'Doner']

// Join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);
// (7) ['Pizza', 'Pasta', 'Risotto', 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// Iterables: arrays, strings, maps, sets, NOT objects!
const str = 'Anil';
const letters = [...str, ' ', 'S.'];
console.log(letters); // (6) ['A', 'n', 'i', 'l', ' ', 'S.']
console.log(...str); // A n i l

// Real word example
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Let's make pasta! Ingredient 2?"),
//   prompt("Let's make pasta! Ingredient 3?"),
// ];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// much better way:
// restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1999, ...restaurant, founder: 'Anil Beter' };
console.log(newRestaurant);
// {foundedIn: 1999, name: 'Classico Italiano', location: 'Via Angelo Tavanti 23, Firenze, Italy', categories: Array(4), starterMenu: Array(4), …}

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Restorante Roma';
console.log(restaurantCopy.name); // Restorante Roma
console.log(restaurant.name); // Classico Italiano


/////////////////////////////////
Destructring Objects
restaurant.orderDelivery({
  time: '23:23',
  address: 'Ice St.',
  mainIndex: 2,
  starterIndex: 2,
});
// Order received! Garlic Bread and Risotto will be delivered to Ice St. at 23:23

restaurant.orderDelivery({
  address: 'Ice St.',
  starterIndex: 1,
});
// Order received! Bruschetta and Pizza will be delivered to Ice St. at 20:00
// Fonksiyondaki atadığım default değerleri kullandı

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
// Classico Italiano {thu: {…}, fri: {…}, sat: {…}} (4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']

// Eğer orijinal objecttekinden farklı isimler kullanmak istiyorsam böyle yapabilirim
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
// Classico Italiano {thu: {…}, fri: {…}, sat: {…}} (4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']

// Set default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);
// [] (4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// Mutating variables (switching)
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

// {a,b} = obj; --> Uncaught SyntaxError: Unexpected token '='
// Bu hatayı çözmek için bütün syntaxi parantez içine almalıyım:
({ a, b } = obj);
console.log(a, b); // 23 7

// Nested objects
const { fri } = openingHours;
console.log(fri); // {open: 11, close: 23}

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c); // 11 23


///////////////////////////////////
Destructring Arrays
const arr = [2, 3, 4];
const a = [0];
const b = [1];
const c = [2];

const [x, y, z] = arr;
console.log(x, y, z); // 2 3 4

const [first, second] = restaurant.categories;
console.log(first, second); // Italian Pizzeria
const [firstNew, , third] = restaurant.categories;
console.log(firstNew, third); // Italian Vegetarian

// Switching variables
let [main, secondary] = restaurant.categories;
console.log(main, secondary);
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary); // Pizzeria Italian

// Same proccess with destructring
[main, secondary] = [secondary, main];
console.log(main, secondary); // Pizzeria Italian

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse); // Garlic Bread Pizza

const nested = [2, 4, [5, 6]];
// const [firstIndex, , thirdIndex] = nested;
// console.log(firstIndex, thirdIndex); // 2 (2)[5,6]

// Destructring inside destructring
const [i, , [j, k]] = nested;
console.log(i, j, k); // 2 5 6

// Default values
// const [p, q, r] = [8, 9];
// console.log(p, q, r); // 8 9 undefined

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // 8 9 1
// hepsini default olarak 1 yaptım, eğer kendim değer vermezsem 1 olarak gözükecek, undefined değil
*/
