let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6
};
superChimpOne.astronautId = 10;
superChimpOne.move = function() {
    return Math.ceil(Math.random()*10);
      
}

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5
};
salamander.astronautId = 8;
console.log(salamander);

salamander.move = function () {
   return Math.ceil(Math.random()*10);
     
}


let chip = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
};
chip.astronautId = 5;
console.log(chip);
chip.move = function () {
   return Math.ceil(Math.random()*10);
     
}

let bea = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
};
bea.astronautId = 2;
console.log(bea);
bea.move = function () {
   return Math.ceil(Math.random()*10);
     
}

let tardi = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
};
tardi.astronautId = 9;
console.log(tardi);
tardi.move = function () {
   return Math.ceil(Math.random()*10);
     
}

let animalObject = [superChimpOne, salamander, chip, bea, tardi];

function crewReports(object) {
   return `${object["name"]} is a ${object["species"]}. They are ${object["age"]} years old and ${object.mass} kilograms. Their ID is ${object["astronautId"]}.`
   // Fill in the blanks with the name, species, age, mass, and ID for the selected animal.
}


console.log(crewReports(animalObject[0]));
console.log(crewReports(animalObject[1]));
console.log(crewReports(animalObject[2]));
console.log(crewReports(animalObject[3]));
console.log(crewReports(animalObject[4]));



function fitnessTest(animals){
   let results = [];
   for (let i = 0; i < animals.length; i++){
       let numSteps = 0;
       let turns = 0;
       while(numSteps <= 20){
       numSteps += animals[i].move();
       turns++;
       }
       results.push(`${animals[i].name} took ${turns} turns to take 20 steps.`);
   }
   return results;
  }
console.log(animalObject[0]);
console.log(fitnessTest(animalObject));
// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!