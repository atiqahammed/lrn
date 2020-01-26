const EventEmitter = require('events');
const eventEmitter = new EventEmitter()

eventEmitter.on('tutorial', (number1, number2) => {
    console.log('tutorial event has been occured!');
    console.log(number1 + number2);
});

eventEmitter.emit('tutorial');
eventEmitter.emit('tutorial', 2, 5);

class Person extends EventEmitter {
    
    constructor(name) {
        super();
        console.log('Person created with name: ' + name);
        this._name = name;
    }

    get name() {
        return this._name;
    }   
}

var atiq = new Person('Atiq');
var shamim = new Person('Shamim');

atiq.on('name', () => {
    console.log('event for ' + atiq.name);
});

shamim.on('name', () => {
    console.log('event for ' + shamim.name);
});

atiq.emit('name');
shamim.emit('name');