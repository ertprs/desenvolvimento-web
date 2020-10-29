console.log('function:')
function sum(valueOne, valueTwo) {
    return valueOne + valueTwo;
}

console.log(sum(1, 5))

console.log('parameter with default value:')
function subtraction(valueOne, valueTwo = 5) {
    return valueOne - valueTwo
}

console.log(subtraction(10))