const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

    console.log('in user route');
    res.send('all users list is here');

});


router.get('/new', (req, res) => {

    console.log('in user/new route');
    res.send('new user added');

});

module.exports = router;