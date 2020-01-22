console.log("hello world")

const tutorial = require('./tutorial')

console.log(tutorial)
console.log(tutorial.sum)
console.log(tutorial.sum(2, 4))
console.log(tutorial.PI)
console.log(new tutorial.SomeMathObject())

//console.log(tutorial(2, 4))