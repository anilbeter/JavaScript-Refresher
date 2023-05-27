"use strict";
/*
function logger() {
    console.log("My name is Anil");
}

// calling / running / function
logger(); // My name is Anil
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

fruitProcessor(2, 4);
// 2, 4

const appleJuice = fruitProcessor(2, 0);
console.log(appleJuice);
// Juice with 2 apples and 0 oranges.
console.log(fruitProcessor(2, 0));
// Juice with 2 apples and 0 oranges.

const appleOrangeJuices = fruitProcessor(2, 4);
console.log(appleOrangeJuices);
// Juice with 2 apples and 4 oranges.


// Function Declaration vs. Expressions

// Function Declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(2000);
console.log(age1);
// 37

// Function Expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(2000);
console.log(age2);
// 37

// So, what's the big deal about these two different type function?
// --> We can call function declarations before they are defined in the code
const age3 = calcAge3(2000);

function calcAge3(birthYear) {
    return 2037 - birthYear;
}

console.log(calcAge3(2000));
//37


// Arrow Function
const calcAgeArrow = birthYear => 2037 - birthYear;
const ageArrow = calcAgeArrow(2000);
console.log(ageArrow);
// 37

const yearsUntilRetirement = birthYear => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return retirement;
}

console.log(yearsUntilRetirement(2000));
// 28

// Arrow Functions with multiple parameters:
const yearsUntilRetirementV2 = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName}, you will be retire ${retirement} years later!`;
}
console.log(yearsUntilRetirementV2(2000, "Anil"));
// Anil, you will be retire 28 years later!


function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

const juiceFruitPieces = fruitProcessor(2, 3);
console.log(juiceFruitPieces);
// Juice with 8 pieces of apple and 12 pieces of orange.


// Functions review
const calcAge = function (birthYear) {
    return 2026 - birthYear;
}

const yearsUntilRetirement = function (firstName, birthYear) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    return `${firstName}, ${retirement > 0 ? `You will be retire in ${retirement} years later!` : `You already should've retired (Your age is ${age})`}`;
}
console.log(yearsUntilRetirement("Anil", 2000));
// Anil, You will be retire in 39 years later!
console.log(yearsUntilRetirement("Mike", 1950));
// Mike, You already should've retired (Your age is 76)
*/

// Coding Challenge #1

const calcAverage = (a, b, c) => {
    return (a + b + c) / 3;
}
const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        return console.log(`Dolphins win! (${avgDolphins} vs ${avgKoalas})`);
    } else if (avgKoalas >= avgDolphins * 2) {
        return console.log(`Koalas win! (${avgKoalas} vs ${avgDolphins})`);
    }
    else {
        console.log("There's no winner...");
    }
}
checkWinner(avgDolphins, avgKoalas);
// Dolphins win! (60 vs 28)