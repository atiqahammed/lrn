const express = require('express');
const app = express();
const path = require('path');
const log4js = require('log4js');
var logger = log4js.getLogger();

logger.level = 'debug';
logger.debug("API - Project starts...");


app.use(express.urlencoded());


app.get('/', function(req, res) {
    logger.debug("REQUEST URL      :: " + req.url);
    logger.debug("REQUEST METHOD   :: " + req.method);
    logger.debug("REQUEST BODY     :: " + JSON.stringify(req.body));
    
    
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/submit-form', (req, res) => {
    logger.debug("REQUEST URL      :: " + req.url);
    logger.debug("REQUEST METHOD   :: " + req.method);
    logger.debug("REQUEST BODY     :: " + JSON.stringify(req.body));
    


    const username = req.body.username
    //...
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8080);

logger.debug("Application is being viewed at http://localhost:8080");

