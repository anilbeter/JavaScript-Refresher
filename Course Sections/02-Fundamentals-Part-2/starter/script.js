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
*/

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