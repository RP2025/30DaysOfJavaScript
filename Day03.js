function isInRange50to99(num1, num2) {
    if ((num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99)) {
      return true;
    } else {
      return false;
    }
  }
  
  // Example usage:
  const number1 = 55;
  const number2 = 105;
  const result = isInRange50to99(number1, number2);
  console.log(result); // Output: true (because 55 is in the range)

  // Example usage:
  const number3 = 30;
  const number4 = 105;
  const result2= isInRange50to99(number3, number4);
  console.log(result2); // Output: False (because none of the number is in the range)
  