//dado literal
let boolean = true
let booleanTwo = false

console.log(`literais: ${boolean} ${booleanTwo}`)

const number = 1
console.log(`${number} se comporta como: ${!boolean}`)
console.log(`${number} se comporta como: ${!!boolean}`)

//tipos que podem se comportar true ou false
console.log("tipos que podem se comportar true ou false")
console.log("verdadeiros:")
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log("falsos:")
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(boolean = false))

//expressão lógica configurar valores padrão
let name = ""
console.log(name || "empty")



