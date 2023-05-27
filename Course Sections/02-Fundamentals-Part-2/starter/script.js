"use strict";

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