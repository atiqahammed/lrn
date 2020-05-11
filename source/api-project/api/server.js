const express = require('express');
const app = express();
const path = require('path');
const log4js = require('log4js');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const models = require('./model');

// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'myproject';
// Create a new MongoClient
const client = new MongoClient(url, { useUnifiedTopology: true });

var logger = log4js.getLogger();
logger.level = 'debug';
logger.debug("API - Project starts...");




app.use(express.urlencoded());




app.get('/', function(req, res) {
    logger.debug("REQUEST URL      :: " + req.url);
    logger.debug("REQUEST METHOD   :: " + req.method);
    logger.debug("REQUEST BODY     :: " + JSON.stringify(req.body));
    
    
    // res.sendFile(path.join(__dirname + '/index.html'));
    res.sendFile(path.join(__dirname + '/registration.html'));
});

app.post('/submit-form', (req, res) => {
    logger.debug("REQUEST URL      :: " + req.url);
    logger.debug("REQUEST METHOD   :: " + req.method);
    logger.debug("REQUEST BODY     :: " + JSON.stringify(req.body));
    



    client.connect(function(err) {
        assert.equal(null, err);
        logger.debug("Database Connected successfully to server");
      
        const db = client.db(dbName);
        


        db.collection('inventory').insertOne({
            username: req.body.username,
            password: req.body.password,
            updatedOn: new Date()
        });
  
  
    
    
        client.close();
    });

    // let user = new models.User(req.body);

    // let userSaving = user.save((err) => {
    //     if (err) {
    //         logger.error("Error occured during saving registration information.");
    //         logger.error("Error code ::   " + err.code);
    //         logger.error(err);

    //         let error = "Something bad happened! Please try agian.";

    //         if (err.code === 11000) {
    //             error = "That username is already taken. Please try another.";
    //         }
    //     }
    //     // return res.render("register", {
    //     //     error: error,
    //     //     csrfToken: req.csrfToken()
    //     // });
    // });

    // logger.debug(userSaving);

    //auth.createUserSession(req, res, user);
    //res.redirect("/dashboard");
    



    //const username = req.body.username
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8080);

logger.debug("Application is being viewed at http://localhost:8080");