let num = 7;
if (num % 2 === 0) {
    if (num % 2 === 1) {
        console.log("odd");
    }
}
console.log (4 == "4")
let a = 7;
if (a % 2 === 1) {
   console.log("Launch");
} else if (a > 5) {
   console.log("Code");
} else {
   console.log("LaunchCode");
}
console.log(4 < 3 || 2 < 3)
console.log (5*3 > 10 && 4 + 6 === 11)
console.log ((5*3) > 10) && ((4+6) === 11)
console.log (
    ((((5*3) > 10) && 4)+6) === 11)
console.log 
(5*(3 > 10)) && (4 + (6 === 11))
console.log ((5*3) > (10 && (4+6))) === 11
if (num % 2 === 0) {
    if (num % 2 === 1) {
        console.log("odd");    
    }
}
console.log (typeof 3 == 4);
console.log (typeof 3 + 4 === 7)
console.log (typeof 3 + 4);
console.lo

let launchReady = false;
let fuelLevel = 17000;

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   launchReady = false;
}
let launchReady = false;
let crewStatus = true;
let computerStatus = 'green';

if (crewStatus &&& computerStatus === 'green') {
   console.log('Crew & computer cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Crew or computer not ready!');
   launchReady = false;
}

if (launchReady) {
   console.log(("10, 9, 8, 7, 6, 5, 4, 3, 2, 1...");
   console.log("Fed parrot...");
   console.log("Ignition...");
   console.log("Liftoff!");
} else {
   console.log("Launch scrubbed.");
}