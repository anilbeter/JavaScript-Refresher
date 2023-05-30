'use strict';

/*
console.log(document.querySelector(".message").textContent);
// Start guessing...

document.querySelector(".message").textContent = "Anil burning up!";
console.log(document.querySelector(".message").textContent);
//Anil burning up!

document.querySelector(".number").textContent = 23;
document.querySelector(".score").textContent = 26;

// .guess input'a ait olduğu için, inputtan veri alırken textContent yerine value kullanıyorum. Bu fark önemli!!!
document.querySelector(".guess").value = 5;
*/


let score = 20;
const secretNum = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretNum;
document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);

    if (!guess) {
        document.querySelector(".message").textContent = "Please enter valid number!⛔";
    } else if (guess === secretNum) {
        document.querySelector(".message").textContent = "Congrats, you won!🎊";
    } else if (guess > secretNum) {
        if (score > 1) {
            document.querySelector(".message").textContent = "Too high.";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = "You lost the game!🤦🏻‍♂️"
            document.querySelector(".score").textContent = 0;
        }
    } else if (guess < secretNum) {
        if (score > 1) {
            document.querySelector(".message").textContent = "Too low.";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = "You lost the game!🤦🏻‍♂️"
            document.querySelector(".score").textContent = 0;
        }
    }
})