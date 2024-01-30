// const input = require('readline-sync');
// let userInput = input.question("Please enter a number:");
// let logger = function(errorMsg) {
//   console.log("ERROR: " + errorMsg);
// };
// if (userInput < 0) {
// logger("Invalid input");
// }

// // Fill in the blank in line 7 (then uncomment it) so that it logs an error message if userInput is negative.
// function printMessage() {
//   console.log("The future is now!");
// }

// setTimeout(printMessage, 5000);
// setTimeout(function () {
//   console.log("The future is now!");
// }, 5000);

let nums = [3.14, 42, 4811];

// TODO: Write a mapping function
// and pass it to .map()
let halved = nums.map();

console.log(halved);

function halve(element) {
  return element / 2;
}