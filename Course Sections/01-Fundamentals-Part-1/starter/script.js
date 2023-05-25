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

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);
// 10 10

// Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK

const johnHeight = 1.95;
const johnWeight = 92;
const markHeight = 1.69;
const markWeight = 78;

const johnBMI = johnWeight / johnHeight ** 2;
const markBMI = markWeight / (markHeight * markHeight);
const markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI);
console.log(markHigherBMI);


const firstName = "Anil";
const job = "student";
const birthYear = 2000;

const anil = "I'm " + firstName + ", a " + job + " and " + (2023 - 2000) + " years old.";
console.log(anil); // amele versiyonu
// I'm Anil, a student and 23 years old.

const anilNew = `Hello! I'm ${firstName} and I'm currently ${job} and ${2023 - birthYear} years old.`;
console.log(anilNew);

// Also we can use situationts that multiple lines!
console.log(`Kızgın duruyordun,
Yüzünü dönüyordun,
Dalgın  yürüyüşlerinin bir anlamı olmalı belki de?`);


const age = 15;

if (age >= 18) {
    console.log("Evila can start driving license!")
} else {
    console.log(`Evila can't take drivers license! He should wait ${18 - age} years more.`)
}

const birthYear = 1999;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century); // 20

CHALLENGE #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"

const johnHeight = 1.95;
const johnWeight = 92;
const markHeight = 1.69;
const markWeight = 78;

const johnBMI = johnWeight / johnHeight ** 2;
const markBMI = markWeight / (markHeight * markHeight);

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`)
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`)
}
*/
// TYPE CONVERSION
const inputYear = "1999";
console.log(Number(inputYear));
console.log(inputYear + 8); // 19998
console.log(Number(inputYear) + 10); // 2009

console.log(Number("Anil")); // NaN (not a number)

const stringNum = String(23);
console.log(typeof stringNum); // string