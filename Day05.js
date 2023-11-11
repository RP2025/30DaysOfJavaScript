// Function to get the file extension from a filename
function getFileExtension(filename) {
    // Use the lastIndexOf method to find the last dot (.) in the filename
    const dotIndex = filename.lastIndexOf('.');
    
    // Check if a dot was found and return the substring after the dot
    if (dotIndex !== -1) {
        const extension = filename.substring(dotIndex + 1);
        return extension;
    } else {
        // If no dot is found, return an empty string to indicate no extension
        return "";
    }
}

// Prompt the user to enter a filename
const filename = prompt("Enter a filename:");

if (filename !== null && filename !== "") {
    // Call the function to get the file extension
    const extension = getFileExtension(filename);

    if (extension !== "") {
        console.log("The file extension is: " + extension);
    } else {
        console.log("The filename has no extension.");
    }
} else {
    console.log("No filename entered.");
}
