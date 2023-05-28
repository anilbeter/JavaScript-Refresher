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


// Arrays

const friends = ["Anil", "Billie", "Cody", "Evan"];
console.log(friends);
// (4) ['Anil', 'Billie', 'Cody', 'Evan']
const y = new Array(1999, 2003, 1984, 2023);

console.log(friends[0]);
// Anil
console.log(friends[4]);
// undefined
console.log(friends[2]);
// Cody

console.log(friends.length);
// 4
console.log(friends[friends.length - 1]);
// Evan

friends[0] = "Micheal";
console.log(friends);
// (4) ['Micheal', 'Billie', 'Cody', 'Evan']

const firstName = "Anil"
const anil = [firstName, "Beter", 2023 - 2000, "student", friends];
console.log(anil);
// (5) ['Anil', 'Beter', 23, 'student', Array(4)]
console.log(anil.length);
// 5

// Exercise
const calcAge = function (birthYear) {
    return 2026 - birthYear;
}
const years = [1999, 1984, 2003, 2015];
console.log(calcAge(years[0])); // 27
console.log(calcAge(years[1])); // 42
console.log(calcAge(years[2])); // 23
console.log(calcAge(years[years.length - 1])); // 11

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2]), calcAge(years[3])];
console.log(ages);
// (4) [27, 42, 23, 11]


// Basic Array Operations

// Add elements
const friends = ["Anil", "Ocean", "Deniz", "Eylül"];
friends.push("Emre");
console.log(friends);
// (5) ['Anil', 'Ocean', 'Deniz', 'Eylül', 'Emre']
const newLength = friends.push("Jim");
console.log(newLength);
// 6

// current friends array --> (6) ['Anil', 'Ocean', 'Deniz', 'Eylül', 'Emre', 'Jim']


friends.unshift("John");
console.log(friends);
// (7) ['John', 'Anil', 'Ocean', 'Deniz', 'Eylül', 'Emre', 'Jim']


// Remove elements
friends.pop(); // removes last element
console.log(friends);
// (6) ['John', 'Anil', 'Ocean', 'Deniz', 'Eylül', 'Emre']
friends.pop();
console.log(friends);
// (5) ['John', 'Anil', 'Ocean', 'Deniz', 'Eylül']
const popped = friends.pop();
console.log(popped);
// Eylül

// current friends array --> (4) ['John', 'Anil', 'Ocean', 'Deniz']

friends.shift() // removes first element
console.log(friends);
// (3) ['Anil', 'Ocean', 'Deniz']


console.log(friends.indexOf("Ocean"));
// 1
console.log(friends.indexOf("Eylül"));
// -1 (there's no Eylül!)

console.log(friends.includes("Eylül"));
// false
console.log(friends.includes("Anil"));
// true

if (friends.includes("Anil")) {
    console.log("You have a friend called Anil!");
}
// You have a friend called Anil!


// Challenge #2

const calcTip = function (bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * (15 / 100);
    } else {
        return bill * (20 / 100);
    }
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills[0], bills[1], bills[2]);
console.log(tips[0], tips[1], tips[2]);
console.log(total[0], total[1], total[2]);


// Objects

const anilArray = [
    "Anil",
    "Beter",
    2026 - 2000,
    "student",
    ["Eylül", "Cem", "Rachael"]
];

// let rewrite but this time object!
const anilObject = {
    firstName: "Anil",
    lastName: "Beter",
    age: 2026 - 2000,
    job: "student",
    friends: ["Eylül", "Cem", "Rachael"]
};


// How to retrieve data from objects / change data in the object with using both the dot and bracket notation

const anilObject = {
    firstName: "Anil",
    lastName: "Beter",
    age: 2026 - 2000,
    job: "student",
    friends: ["Eylül", "Cem", "Rachael"]
}

console.log(anilObject.lastName); // Beter
console.log(anilObject["lastName"]); // Beter

const nameKey = "Name";
console.log(anilObject["first" + nameKey]); // Anil
console.log(anilObject["last" + nameKey]); // Beter
// Görüldüğü gibi bracket notation kullandığımda içeriye herhangi bir expression koyabiliyorum (template literal dahil!)

// console.log(anilObject."anil" + nameKey); --> ERROR
const interestedIn = prompt("What do you want to know about Anil? Chose between firstName, lastName, age, job and friends")


if (anilObject[interestedIn]) {
    console.log(anilObject[interestedIn]);
    // Bracket notation kullanmak zorundayım, dot notation hataya sebep olur. Bracket interestedIn'i yazdığım şey olarak dönüştürüp veri sağlayabiliyor
} else {
    console.log("I dont have that info...");
}

anilObject.location = "United States";
anilObject["twitter"] = "@anilfeelsalive";
console.log(anilObject);

// Challenge
// Anil has 3 friends, and his best friend is called Eylül
console.log(`${anilObject["firstName"]} has ${anilObject.friends.length} friends, and his best friend is called ${anilObject.friends[0]}`);
// Anil has 3 friends, and his best friend is called Eylül


const anil = {
    firstName: "Anil",
    lastName: "Beter",
    birthYear: 2000,
    job: "student",
    friends: ["Eylül", "Dream"],
    hasDriverLicense: true,

    // calcAge: function (birthYear) {
    //     return 2026 - birthYear;
    // }

    // calcAge: function () {
    // console.log(this)
    // this --> {firstName: 'Anil', lastName: 'Beter', birthYear: 2000, job: 'student', friends: Array(2), …}
    // return 2026 - this.birthYear;
    // }

    calcAge: function () {
        // creating new data called age
        this.age = 2026 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-years old ${this.job}, and he has ${this.hasDriverLicense ? "a" : "not"} driver's license.`;
    }
};

console.log(anil.calcAge()); // 26

console.log(anil.age); // 26
console.log(anil.age);
console.log(anil.age);

//Challenge
// Anil is a 26-years old student, and he has a driver's license.
// write a function called getSummary() that gives sentence upper
console.log(anil.getSummary());
// Anil is a 26-years old student, and he has a driver's license.


// Challenge #3

const mark = {
    firstName: "Mark",
    lastName: "Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.BMI = this.mass / (this.height ** 2);
        return this.BMI;
    }
};

const john = {
    firstName: "John",
    lastName: "Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.BMI = this.mass / (this.height ** 2);
        return this.BMI;
    }
}

mark.calcBMI();
john.calcBMI();
// bu 2 fonksiyonu yazdım çünkü oluşturduğum this.bmi verisini oluşturmam için fonksiyonları en az bir kere çalıştırmam gerekeli yoksa bu object ler kendi kendilerine bmi verisini oluşturmayacaktı.

if (john.BMI > mark.BMI) {
    console.log(`John's BMI (${john.BMI}) higher than Mark's BMI (${mark.BMI})`);
} else {
    console.log(`Mark's BMI (${mark.BMI}) higher than John's BMI (${john.BMI})`);
}

// Mark's BMI (27.309968138370508) higher than John's BMI (24.194608809993426)
*/

// The For Loop

// console.log("Lifting weight repetition 1");
// console.log("Lifting weight repetition 2");
// console.log("Lifting weight repetition 3");
// console.log("Lifting weight repetition 4");
// console.log("Lifting weight repetition 5");
// tek tek yazmak tam bir amele işi

for (let i = 1; i <= 10; i++) {
    console.log(`Lifting weight repetition ${i}`);
}