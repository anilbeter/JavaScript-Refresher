// Exporting module
console.log('Exporting module');

const shippingCost = 10;
const cart = [];

// KEEP IN MIND -  export always need to happen in top level code
// ie. it won't work in if-else block
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

// Default export
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
