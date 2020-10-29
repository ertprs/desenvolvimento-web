let empty
console.log('uninitialized variable: ')
console.log(empty)

console.log('null address: ')
empty = null

console.log(empty)

let object ={
    name:"bob"
}

console.log('assignment by reference: ')
let objectTwo = object

objectTwo.age = 14

console.log(object, object)