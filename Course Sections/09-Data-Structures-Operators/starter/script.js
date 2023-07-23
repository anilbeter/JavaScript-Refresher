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

/*
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
