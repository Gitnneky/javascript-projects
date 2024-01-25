function sayHello() {
   console.log("Hello, World!");
}
function plusTwo(num) {
   return num + 2;
}

let a = 2;

for (let i=0; i < 4; i++) {
   a = plusTwo(a);
}

console.log(a);
function repeater(str) {
   let repeated = str + str;
   console.log(repeated);
}

repeater('Bob');
function repeater(str) {
   let repeated = str + str;
   // console.log(repeated);
}

console.log (repeater('Bob'));
let num = 42;

function isEven (num) {
   return num % 2 === 0;
}

console.log(isEven(43));
function myFunc(radius) {
   let area = Math.PI * radius**2;
   return area;
}
let names = ["Lena", "James", "Julio"];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
function printNames(names) {
   for (let i = 0; i < names.length; i++) {
       console.log(names[i]);
   }
}
function printArray(names) {
   for (let i = 0; i < names.length; i++) {
       console.log(names[i]);
   }
}

printArray(["Lena", "James", "Julio"]);
console.log("---");
printArray(["orange", "apple", "pear"]);  
function sayHello() {
   console.log("Hello, World!");
}

sayHello();
function doNothing() {}

let returnVal = doNothing();
console.log(returnVal);