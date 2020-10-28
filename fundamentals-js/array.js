const array = [15,02,196]

console.log('read array value <array[0]>:')
console.log(`array[0] = ${array[0]}\n`)


console.log('array size <.length>:')
console.log(`size: ${array.length}\n`)

console.log("add to array: <.push(valua1, value2...)>")
console.log(`inner array: ${array}\n`)
array.push({id: 1}, false, 'A', null, 2.01)
console.log(`array with addition: ${array}\n`)

console.log('remove the last element of the array <pop()>:')
console.log(`value removed: ${array.pop()}\n`)

console.log('remove from the array at a specific index <delete>:')
console.log(`value removed: ${array[3]}\n`)
delete array[3]

console.log(array)

console.log(`array type:${typeof array}`)


