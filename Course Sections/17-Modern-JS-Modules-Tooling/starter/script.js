// Importing module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';

// addToCart('bread', 5);
// 5 bread added to cart

// console.log(price, tq);
// 237 23

console.log('Importing module');
// console.log(shippingCost); -> Uncaught ReferenceError: shippingCost is not defined

// Import contaning everything that is exported from module
// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// 5 bread added to cart
// console.log(ShoppingCart.totalPrice);
// 237

// Default export
import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('ocean', 1);
console.log(cart);
// (3) [{…}, {…}, {…}]

// TOP-LEVEL await (only available in modules)

// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);

// const getLastPost = async function () {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();
//   console.log(data);

//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

// const lastPost = getLastPost();
// console.log(lastPost);
// Promise {<pending>}
// ---> Because, async function always return a promise!

// Not very clean solution:
// lastPost.then(data => console.log(data));
// {title: 'at nam consequatur ea labore ea harum', text: 'cupiditate quo est a modi nesciunt soluta\nipsa vol…nam et distinctio eum\naccusamus ratione error aut'}

// Instead of using regular resolve stuff (like then, catch) use top-level await
// More clean solution:
// const lastPost2 = await lastPost;
// console.log(lastPost2);
// {title: 'at nam consequatur ea labore ea harum', text: 'cupiditate quo est a modi nesciunt soluta\nipsa vol…nam et distinctio eum\naccusamus ratione error aut'}

// The Module Pattern

const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 4); // 4 apple added to cart
ShoppingCart2.addToCart('pizza', 2); // 2 pizza added to cart

console.log(ShoppingCart2);
// {cart: Array(2), totalPrice: 237, totalQuantity: 23, addToCart: ƒ}
// addToCart: ƒ (product, quantity)
// cart: (2) [{…}, {…}]
// totalPrice: 237
// totalQuantity: 23

console.log(ShoppingCart2.shippingCost); // undefined
console.log(cart);
// cuz of module.hot -> (9) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]

// CommonJS Modules (Node.JS stuff)

// Export
// export.const addToCart = function (product, quantity) {
//   cart.push({ product, quantity });
//   console.log(`${quantity} ${product} added to cart`);
// };

// Import
// const { addToCart } = require("./shoppingCart.js")

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
console.log(stateClone);
state.user.loggedIn = false;
console.log(stateClone);
// stateClone'daki loggedIn'de false oldu, ama bunu istemiyorum. Lodash frameworkündeki cloneDeep'i kullanabilirim

const stateDeepClone = cloneDeep(state);
console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}

class Person {
  #greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${this.name}`);
  }
}
const anil = new Person('Anil');

console.log('Anil' ?? null);

console.log(cart.find(el => el.quantity >= 2));
Promise.resolve('TEST').then(x => console.log(x));

import 'core-js/stable';
// import 'core-js/stable/array/find';
// import 'core-js/stable/promise';

// Polyfilling async function
import 'regenerator-runtime/runtime';
