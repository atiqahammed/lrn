const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


app.set('view engine', 'ejs');

app.get('/', (req, res) => {

    console.log('here in the root path');

    //res.sendStatus(500);
    //res.status(500).send('Hi');
    //res.status(500).json({ message: 'Server Error.' });
    //res.json({ message: 'Access Granted.', username: 'atiq_ahammed' });
    //res.send('Hi there...');
    //res.download('server.js');

    res.render('index', { name: 'Shamim' });
});


app.listen(PORT);



console.log(`Application running on : ${PORT}`);