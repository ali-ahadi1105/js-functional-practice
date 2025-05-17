const divide = (num1, num2) => num1 / num2;

function checkAndDevide(func) {
  return function (...args) {
    if (args[1] === 0) {
      throw new Error("Cannot divide by zero");
    }
    return func(...args);
  }
};

const safeDevide = checkAndDevide(divide);

console.log(safeDevide(10,2));
console.log(safeDevide(10,0));
