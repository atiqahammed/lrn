const sum = (num1, num2) => num1 + num2;
const PI = 3.1416;

class SomeMathObject {
    
    constructor() {
        console.log('Object has been created!')
    }
}

module.exports.sum = sum;
module.exports.PI = PI;
module.exports.SomeMathObject = SomeMathObject;