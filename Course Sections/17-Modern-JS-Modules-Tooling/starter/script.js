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
