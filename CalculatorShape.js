// Calculator for Shape


function calculateSquareArea(side) {
    return side*side;
}
function calculateSquarePerimeter(side) {
    return 4*side;
}
function calculateCircleArea(radius) {
    return Math.PI*radius*radius;
}
function calculateCircleCircumference(a,b) {
    return 2*Math.PI*radius;
}
function calculateCubeArea(side) {
    return side*side*6;
}
function calculateCubeVolume(side) {
    return side*side*side;
}
function calculateTubeArea(radius,height) {
    return 2*Math.PI*radius*radius + 2*height*Math.PI*radius;
}
function calculateTubeVolume(radius,height) {
    return Math.PI*radius*radius*height;
}

console.log(calculateSquareArea(5));
console.log(calculateTubeVolume(5,6));
