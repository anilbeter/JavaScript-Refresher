'use strict';

console.log(document.querySelector(".message").textContent);
// Start guessing...

document.querySelector(".message").textContent = "Anil burning up!";
console.log(document.querySelector(".message").textContent);
//Anil burning up!

document.querySelector(".number").textContent = 23;
document.querySelector(".score").textContent = 26;

// .guess input'a ait olduğu için, inputtan veri alırken textContent yerine value kullanıyorum. Bu fark önemli!!!
document.querySelector(".guess").value = 5;