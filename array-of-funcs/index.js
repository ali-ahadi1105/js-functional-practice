const double = x => x * 2;
const square = x => x * x;
const minusOne = x => x - 1;

const functions = [
    double, 
    square, 
    minusOne,
    // Math.sqrt => can use built-in functions
];

let initNumber = 3;

let result = initNumber;

for(const func of functions) {
    result = func(result);
}

console.log('The functions result is: ', result);
