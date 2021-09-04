const express = require('express');
const router = express.Router();
const { info, warn, log, error, indent } = require('pretty-console-logs');

router.use(logger);

router.get('/', (req, res) => {

    log('in user route');
    res.send('all users list is here');

});

router.post('/', (req, res) => {

    log('in user post path');

    if(req.body.firstName) {
        users.push({ name : req.body.firstName });
        info(`users first name :: ${req.body.firstName}`);
        info(`new user created with name ${req.body.firstName}`);
        res.render('users/Hi', {userName: req.body.firstName});
    } else {    
        res.send('something went wrong. could not create a new user')
    }
});

router.get('/new', (req, res) => {

    log('in user/new route');
    res.render('users/new', {firstName: 'FirstName'})

});


// note: single paramter route is being used for multiple request method.
router.route('/:userId').get((req, res) => {

    info(JSON.stringify(req.user));
    const userId = req.params.userId || '';

    if(userId) {

        info(`requested with userID: ${userId}`);
        res.send(`requested with userID: ${userId}`);
    } else {
        warn('invalid userID');
        res.send('invalid userID');
    }
}).put((req, res) => {

    const userId = req.params.userId || '';

    if(userId) {

        log(`update user with userID: ${userId}`);
        res.send(`update user with userID: ${userId}`);
    } else {
        warn('invalid userID');
        res.send('invalid userID');
    }
}).delete((req, res) => {

    const userId = req.params.userId || '';

    if(userId) {

        info(`delete user with userID: ${userId}`);
        res.send(`delete user with userID: ${userId}`);
    } else {
        warn('invalid userID');
        res.send('invalid userID');
    }
});

const users = [{name: 'Atiq'}, {name: 'Ahammed'}];

router.param('userId', (req, res, next, userId) => {

    if(userId && userId.length > 0 && userId.length % 2 == 0) {
        req.user = users[0];
    } else {
        req.user = users[1];
    }

    next();

});

function logger(req, res, next) {

    log(`be concern with user information. ):(`);
    const currentTime = new Date();
    info(`requested on user path:: ${currentTime.toLocaleTimeString()}`);
    info(`in user path request path:: ${req.originalUrl}`);
    next();
}

module.exports = router;