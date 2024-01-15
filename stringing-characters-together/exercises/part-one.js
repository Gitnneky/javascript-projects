// let num = 1001; 
let num = "123.45";

//let numString = num.toString();
//let numlength = (numString.length);
//console.log(numlength);
console.log(num, "has", (num[5]),"digits", "but a length of", num.length);
//Returns 'undefined'.


//Use type conversion to print the length (number of digits) of an integer.

//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
console.log(num, "has", (num[5]),"digits", "but a length of", num.length);
//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
if (String(num).includes('.')){ 
    console.log(String(num).length-1);
} else {
    console.log(String(num).length);
}