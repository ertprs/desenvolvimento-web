const firstTest = 9.5;
const lastTest = Number("5");

const weightOne = 2;
const weightTwo = 3;

const average = (firstTest * weightOne + lastTest * weightTwo) / (weightOne + weightTwo);
console.log("average: " + average);
console.log("average: " + average.toFixed(5));
console.log("average: " + average.toString());
console.log("average: " + Number.isInteger());