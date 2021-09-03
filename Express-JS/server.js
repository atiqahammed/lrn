const express = require('express');
const app = express();


app.get('/', (req, res) => {

    console.log('here in the root path');
    res.send('Hi there...');

});


app.listen(3000);



//console.log("test");