// console.log('Hello World!');

// Valuables and Variables

// console.log('Anil');
// console.log(23);

// let firstName = 'Anil';
// console.log(firstName);
// let lastName = 'Beter';
// console.log(lastName);

// let PI = 3.1415;
/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
// boolean
console.log(typeof javascriptIsFun);
// boolean
console.log(typeof 23);
// number
console.log(typeof 'Anil');
// string

javascriptIsFun = 'you right!';
console.log(typeof javascriptIsFun);
// string

let anilJob;
// undefined, i can change that variable later
console.log(typeof anilJob);
// undefined

anilJob = 'Programmer!';
console.log(anilJob);
console.log(typeof anilJob);

let age = 23;
age = 26;
// this is totally legal! I can change let variable (reassing)
let myJob;
myJob = 'Software Engineer';

//but there is a variable called conts. You cant reassing const variables!
const birthYear = 1999;
const firstName = 'Anil';
*/

// Math operators
const now = 2029;
const ageAnil = now - 2000;
const ageEva = now - 1997;
console.log(ageAnil, ageEva);
// 29 32

console.log(ageAnil * 2, ageAnil / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Anil';
const lastName = 'Beter';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // 25
x -= 3; // 22
x++; // 23
x *= 2; // 46
x--; // 45
console.log(x);

// Comparison operators
console.log(ageAnil > ageEva); // false
console.log(ageEva >= 18); // true

const isFullAge = ageAnil >= 18;
console.log(typeof isFullAge); // boolean
