const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(logger);

app.get('/', rootMiddleware, (req, res) => {

    console.log('here in the root path');

    //res.sendStatus(500);
    //res.status(500).send('Hi');
    //res.status(500).json({ message: 'Server Error.' });
    //res.json({ message: 'Access Granted.', username: 'atiq_ahammed' });
    //res.send('Hi there...');
    //res.download('server.js');

    res.render('index', { name: 'Shamim' });
});

const usersRouter = require('./routers/users');
app.use('/users', usersRouter);

function logger(req, res, next) {

    const currentTime = new Date();
    console.log(`requested on ${currentTime.toLocaleTimeString()}`);
    console.log(`request path ${req.originalUrl}`);
    next();
}

function rootMiddleware(req, res, next) {
    console.log('this is only for root path');
    console.log(req.originalUrl);
    next();
}



app.listen(PORT);

console.log(`Application running on : ${PORT}`);