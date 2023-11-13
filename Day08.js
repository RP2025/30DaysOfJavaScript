function getSubsets(arr, length) {
    if (length === 0) {
        return [[]]; // An empty array is the base case
    }
    
    if (arr.length === 0 || length > arr.length) {
        return []; // No valid subsets can be formed
    }

    if (length === 1) {
        return arr.map(item => [item]); // Return each element as a separate subset
    }

    const firstElement = arr[0];
    const rest = arr.slice(1);

    // Recursively find subsets that include the first element and those that do not
    const subsetsWithFirst = getSubsets(rest, length - 1).map(subset => [firstElement, ...subset]);
    const subsetsWithoutFirst = getSubsets(rest, length);

    return [...subsetsWithFirst, ...subsetsWithoutFirst];
}

// Sample array and subset length
const sampleArray = [1, 2, 3];
const subsetLength = 2;

// Get all possible subsets
const subsets = getSubsets(sampleArray, subsetLength);

console.log(subsets);
