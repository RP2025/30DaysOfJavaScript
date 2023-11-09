function calculateTriangleArea(side1, side2, side3) {
    // Heron's formula for calculating the area of a triangle
    const s = (side1 + side2 + side3) / 2;
    const area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
    return area;
}

// Given sides of the triangle
const side1 = 5;
const side2 = 6;
const side3 = 7;

// Calculate and display the area
const triangleArea = calculateTriangleArea(side1, side2, side3);
console.log("The area of the triangle is: " + triangleArea);
