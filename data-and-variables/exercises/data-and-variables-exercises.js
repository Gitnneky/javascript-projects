// Declare and assign the variables below
let shuttleName = 'Determination';
let shuttleSpeedMph = 17500;
let distanceToMarsKm = 225000000;
let distanceToMoonKm = 38400;
const milesPerKm = 0.621; 


// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof shuttleName);
console.log(typeof shuttleSpeedMph);
console.log(typeof distanceToMarsKm);
console.log(typeof distanceToMoonKm);
console.log(typeof milesPerKm);

// Calculate a space mission below
let milesToMars = (distanceToMarsKm * milesPerKm);
let milesToHours = (milesToMars/shuttleSpeedMph);
let daysToMars = (milesToHours/24);
// Print the results of the space mission calculations below
console.log (shuttleName,"will take", daysToMars,"days to reach Mars.");
// Calculate a trip to the moon below
let milesToMoon = (distanceToMoonKm * milesPerKm)
let hoursToMoon = (milesToMoon/shuttleSpeedMph)
let daysToMoon = (milesToMoon/24)
// Print the results of the trip to the moon below
console.log (shuttleName, "will take", daysToMoon, "days to reach moon.");
let num = 7;

  dsa