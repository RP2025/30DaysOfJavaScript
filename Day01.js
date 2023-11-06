// Function to reverse a number
function reverseNumber(number) {
    // Convert the number to a string, reverse it, and convert it back to a number
    const reversedString = number.toString().split('').reverse().join('');
    return parseInt(reversedString, 10);
}

const x = 32243;
const reversedX = reverseNumber(x);
console.log(reversedX);
