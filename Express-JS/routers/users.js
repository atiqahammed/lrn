const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

    console.log('in user route');
    res.send('all users list is here');

});

router.post('/', (req, res) => {

    console.log('in user post path');
    res.send('new user created');

});

router.get('/new', (req, res) => {

    console.log('in user/new route');
    res.send('new user added');

});


// note: single paramter route is being used for multiple request method.
router.route('/:userId').get((req, res) => {

    const userId = req.params.userId || '';

    if(userId) {

        console.log(`requested with userID: ${userId}`);
        res.send(`requested with userID: ${userId}`);
    } else {
        console.log('invalid userID');
        res.send('invalid userID');
    }
}).put((req, res) => {

    const userId = req.params.userId || '';

    if(userId) {

        console.log(`update user with userID: ${userId}`);
        res.send(`update user with userID: ${userId}`);
    } else {
        console.log('invalid userID');
        res.send('invalid userID');
    }
}).delete((req, res) => {

    const userId = req.params.userId || '';

    if(userId) {

        console.log(`delete user with userID: ${userId}`);
        res.send(`delete user with userID: ${userId}`);
    } else {
        console.log('invalid userID');
        res.send('invalid userID');
    }
});

/*
router.get('/:userId', (req, res) => {

    const userId = req.params.userId || '';

    if(userId) {

        console.log(`requested with userID: ${userId}`);
        res.send(`requested with userID: ${userId}`);
    } else {
        console.log('invalid userID');
        res.send('invalid userID');
    }
});

router.put('/:userId', (req, res) => {

    const userId = req.params.userId || '';

    if(userId) {

        console.log(`update user with userID: ${userId}`);
        res.send(`update user with userID: ${userId}`);
    } else {
        console.log('invalid userID');
        res.send('invalid userID');
    }
});

router.delete('/:userId', (req, res) => {

    const userId = req.params.userId || '';

    if(userId) {

        console.log(`delete user with userID: ${userId}`);
        res.send(`delete user with userID: ${userId}`);
    } else {
        console.log('invalid userID');
        res.send('invalid userID');
    }
});*/

module.exports = router;