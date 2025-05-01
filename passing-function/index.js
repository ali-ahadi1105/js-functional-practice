const combineXAndY = (func, x, y) => func(x, y);

const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

const addResult = combineXAndY(add, 5, 3);
const subtractResult = combineXAndY(subtract, 5, 3);
const multiplyResult = combineXAndY(multiply, 5, 3);
const divideResult = combineXAndY(divide, 5, 3);

console.log(`Addition: ${addResult}`);
console.log(`Subtraction: ${subtractResult}`);
console.log(`Multiplication: ${multiplyResult}`);
console.log(`Division: ${divideResult}`);


