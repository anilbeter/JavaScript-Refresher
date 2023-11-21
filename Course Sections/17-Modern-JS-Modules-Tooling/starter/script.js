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
import add from './shoppingCart.js';
add('pizza', 2);
// 2 pizza added to cart

// TOP-LEVEL await (only available in modules)

// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);
// Promise {<pending>}
// ---> Because, async function always return a promise!

// Not very clean solution:
// lastPost.then(data => console.log(data));
// {title: 'at nam consequatur ea labore ea harum', text: 'cupiditate quo est a modi nesciunt soluta\nipsa vol…nam et distinctio eum\naccusamus ratione error aut'}

// Instead of using regular resolve stuff (like then, catch) use top-level await
// More clean solution:
const lastPost2 = await lastPost;
console.log(lastPost2);
// {title: 'at nam consequatur ea labore ea harum', text: 'cupiditate quo est a modi nesciunt soluta\nipsa vol…nam et distinctio eum\naccusamus ratione error aut'}
