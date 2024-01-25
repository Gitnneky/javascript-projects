// LINE
function makeLine(num) {
    let line = ''
    for (let i = 0; i < num; i++){
    line += '#'
    }
return line; 
}
console.log(makeLine(5));

// Square
function makeSaquare(size) {
    let square = ''
    for (let i = 0; i < size; i++ ){
        square += '#'.repeat(size)+ '\n';
    }
    return square;
}
console.log(makeSaquare(5));

// Rectangle
function makeRectangle(width, height) {
    let rectangle = ''
    for (let i = 0; i < height; i++) {
    rectangle += (makeLine(width) + '\n');
}
return rectangle.slice(0, -1);
}
console.log(makeRectangle(5, 3));

// Downward Stairs
function makeDownWardStairs(height) {
    let downwardstairs = ''
    for (let i = 0; i < height; i++){
    downwardstairs += (makeLine(i+1) + '\n');
}
return downwardstairs.slice(0, -1);
}
console.log(makeDownWardStairs(5));

// Space Line
function makeSpaceLine(numspaces, numChars) {
    let spaces = " ".repeat(numspaces);
    let hashes = '#'.repeat(numChars);
    return spaces + hashes + spaces;
   
}
console.log(makeSpaceLine(3,5));

// Isoceles Triangle
function makeIsoscelesTriangle(height) {
    let Triangle = ''
    for (let i = 0; i < height; i++){
    Triangle += (makeSpaceLine(height - i, 2*i + 1) + '\n');
    }
    return Triangle.slice(0, -1);
}
console.log(makeIsoscelesTriangle(5));

// Diamonds
function makeDiamond(height) {
  let diamond = " ";
  for (let i =1; i <= height; i += 2){
    let spaces = (height - i) / 2;
    let hashes = i;
    diamond += " ".repeat(spaces) + "*".repeat(hashes) + "\n";
  }
  for (let i = height - 2; i >= 1; i -= 2){
    let spaces = (height-i) / 2;
    let hashes = i;
    diamond += " ".repeat(spaces) + "*".repeat(hashes) + "\n"
  }  
  return diamond;
}
console.log(makeDiamond(5));