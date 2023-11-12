function hasNumberPair(num1, num2) {
    return num1 === 50 || num2 === 50 || (num1 + num2) === 50;
}

// Example usage
const number1 = 50;
const number2 = 25;

const result = hasNumberPair(number1, number2);
console.log("Result: " + result);
