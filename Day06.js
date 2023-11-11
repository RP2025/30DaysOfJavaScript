function sumOrTripleSum(a, b) {
    if (a === b) {
        return 3 * (a + b);
    } else {
        return a + b;
    }
}

// Example usage
const num1 = 5;
const num2 = 5;

const result = sumOrTripleSum(num1, num2);
console.log("The result is: " + result);
