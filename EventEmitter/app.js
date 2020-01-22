const EventEmitter = require('events');
const eventEmitter = new EventEmitter()

eventEmitter.on('tutorial', (number1, number2) => {
    console.log('tutorial event has been occured!');
    console.log(number1 + number2);
});

eventEmitter.emit('tutorial');
eventEmitter.emit('tutorial', 2, 5);
