const person = {
    name: 'atiq',
    age: 24
}

if('name' in person) {
    console.log('there is a name property in person object')
}

if('address' in person) {
    console.log('there is a address property in person object')
} else {
    console.log('there is not a address property in person object')
}


const testArray = [2, 5, 66, 'name'];

if('name' in testArray) {
    console.log('there is a name property in array')
} else {
    console.log('there is not any name property in array')
}