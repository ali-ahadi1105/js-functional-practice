const createPrinter = () => () => console.log('Hello functional prigramming');

createPrinter()(); // Hello functional prigramming

function createPrinter2() {
    return function () {
        console.log('Hello functional prigramming 2');
    };
}

createPrinter2()(); // Hello functional prigramming

const multiplier = (y) => (x) => {
    console.log(`miltiply ${x} by ${y}`);
    return x * y;
};

const double = multiplier(2);
const triple = multiplier(3);
const quadruple = multiplier(4);

console.log(double(5)); // 10
console.log(triple(5)); // 15
console.log(quadruple(5)); // 20

