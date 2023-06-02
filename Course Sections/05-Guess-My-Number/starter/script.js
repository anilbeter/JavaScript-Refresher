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
let secretNum = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent =
      'Please enter valid number!⛔';
  } else if (guess === secretNum) {
    document.querySelector('.message').textContent = 'Congrats, you won!🎊';
    document.querySelector('.number').textContent = secretNum;
    // Important note about manipulating CSS: Whenever we are manipulating a style, we always need to specify as a string.
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guess > secretNum) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high.';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!🤦🏻‍♂️';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNum) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low.';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!🤦🏻‍♂️';
      document.querySelector('.score').textContent = 0;
    }
  }
});
// Coding Challenge #1
// Implement a game rest functionality, so that the player can make a new guess!
// Your tasks:
// 1. Select the element with the 'again' class and attach a click event handler
// 2. In the handler function, restore initial values of the 'score' and
// 'secretNumber' variables
// 3. Restore the initial conditions of the message, number, score and guess input
// fields
// 4. Also restore the original background color (#222) and number width (15rem)
// GOOD LUCK 😀
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
