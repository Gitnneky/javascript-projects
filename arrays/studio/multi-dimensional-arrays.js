let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";
const input = require('readline-sync');
//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
console.log (food.split(",").sort());
console.log(equipment.split(",").sort());
console.log(pets.split(",").sort());
console.log(sleepAids.split(",").sort());
food = food.split(",").sort();
equipment = equipment.split(",").sort();
pets = pets.split(",").sort();
sleepAids = sleepAids.split(",").sort();
//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = []; 
cargoHold.push(food, equipment, pets, sleepAids);
console.log(cargoHold);
//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
let userInput ='';
let userInput2 = '';
userInput=input.question("Select a cabinet (0-3)");
//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
console.log(`Display content of the selected cabinet: ${cargoHold[userInput]}`);
userInput2 = input.question("Select an item from cabinet: ");
//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
 if(cargoHold.includes(userInput2)){
    console.log(`Cabinet ${userInput} Does not Include ${userInput2}`);
 } else {
    console.log(`Cabinet ${userInput} Does Contain ${userInput2}`);
 }
// Code works but not correctly Logic error after giving a wrong answer it disppalys the correct input