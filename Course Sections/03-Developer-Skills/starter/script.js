// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// Problem
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperatrue amplitude. Keep in mind that sometimes there might be a sensor error."

/*
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];


const calcAmplitude = temps => {
    let max = temps[0];
    let min = temps[0];
    for (let i = 0; i < temps.length; i++) {
        let curTemp = temps[i];
        if (typeof temps[i] !== "number") continue;
        if (curTemp > max) {
            max = curTemp;
        }
        if (curTemp < min) {
            min = curTemp;
        }
    }
    return `The max temp: ${max} and the min temp: ${min}. Amplitude is: ${max - min}`;
}
console.log(calcAmplitude(temperatures));
// The max temp: 17 and the min temp: -6. Amplitude is: 23

Challenge 

Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]
GOOD LUCK 😀
*/

const printForecast = function (array) {
    const firstDot = "...";
    let sentence = firstDot + " ";
    for (let i = 0; i < array.length; i++) {
        sentence += `${array[i]}C in ${i + 1} days ... `;
    }
    return sentence;
}
const data_1 = [17, 21, 23, 5];
console.log(printForecast(data_1));
// ... 17C in 1 days ... 21C in 2 days ... 23C in 3 days ... 5C in 4 days ... 