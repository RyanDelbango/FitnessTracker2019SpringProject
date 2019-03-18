const express = require('express');
const user = require('../models/comment');

const app = express.Router();

// Get all comments on food logs
app.get("/food", (req, res) => {

    user.getAllF((err, data) => {
        if(err) throw err;
        res.send(data);
    });

});

// Get all comments on a particular food log
app.get("/food/:log_id", (req, res) => {

    user.getF(req.params.log_id, (err, data) => {
        if(err) throw err;
        res.send(data);
    });

});

// Get all comments on a particular exercise log
app.get("/exercise/:log_id", (req, res) => {

    user.getE(req.params.log_id, (err, data) => {
        if(err) throw err;
        res.send(data);
    });

});

// Get all comments on exercise logs
app.get("/exercise", (req, res) => {

    user.getAllE((err, data) => {
        if(err) throw err;
        res.send(data);
    });

});

// Create comments on exercise logs
app.post("/exercise/:userid/:log_id", (req, res) => {
    user.createE(req.params.userid, req.params.log_id, req.body, (err, data) => {
        if (err) throw (err)
        res.send(data);
    });

});

// Create comments on food logs
app.post("/food/:userid/:log_id", (req, res) => {
    user.createF(req.params.userid, req.params.log_id, req.body, (err, data) => {
        if (err) throw (err)
        res.send(data);
    });

});


module.exports = app;