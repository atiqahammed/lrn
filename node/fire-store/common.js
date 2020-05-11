var dummyjson = require('dummy-json');
var template = '{\
    "name": "{{firstName}}",\
    "age": {{int 18 65}},\
    "id": "{{guid}}"\
  }';

function getDummyUser() {
    return JSON.parse(dummyjson.parse(template));
}

module.exports = {
    getDummyUser,
}