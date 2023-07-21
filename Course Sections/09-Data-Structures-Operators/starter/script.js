'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
      // Order received! Garlic Bread and Risotto will be delivered to Ice St. at 23.23
    );
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
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

/*
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
