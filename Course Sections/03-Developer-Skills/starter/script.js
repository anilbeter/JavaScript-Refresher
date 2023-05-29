// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// Problem
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperatrue amplitude. Keep in mind that sometimes there might be a sensor error."

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