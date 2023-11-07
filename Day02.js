//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.

//Example string: 'the quick brown fox'
//Expected Output: 'The Quick Brown Fox '


function capitalizeWords(str) {
    // Split the input string into an array of words
    const words = str.split(' ');
  
    // Capitalize the first letter of each word
    const capitalizedWords = words.map(word => {
      if (word.length > 0) {
        return word[0].toUpperCase() + word.slice(1);
      } else {
        return word; // Handle empty strings, if any
      }
    });
  
    // Join the capitalized words back into a single string
    const capitalizedStr = capitalizedWords.join(' ');
  
    return capitalizedStr;
  }
  
  // Example usage:
  const inputString = 'the quick brown fox';
  const result = capitalizeWords(inputString);
  console.log(result); // Output: 'The Quick Brown Fox'
  