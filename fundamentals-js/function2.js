console.log('anonymous function: function (){}')
console.log('storing a function in a variable')
const showSum = function(a,b){
    console.log( a+b)
}

showSum(10,100)

const sum = (a,b)=>{
    return a + b;
}

const sub = (a,b) => a-b
console.log(sub(10,1));