const EventEmitter = require('events');
const eventEmitter = new EventEmitter()

eventEmitter.on('tutorial', () => {
    console.log('tutorial event has been occured!')
});

eventEmitter.emit('tutorial')