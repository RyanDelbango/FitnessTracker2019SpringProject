const express = require('express');
const user = require('../models/comment');

const app = express.Router();

// Get all comments on food logs
app.get("/food", (req, res, next) => {
    user.getAllF()
    .then(x=>  res.send(x) )
    .catch(next)
});

// Get all comments on a particular food log
app.get("/food/:log_id", (req, res, next) => {
    user.getF(req.params.log_id)
    .then(x=>  res.send(x) )
    .catch(next)
});

// Get all comments on a particular exercise log
app.get("/exercise/:log_id", (req, res, next) => {
    user.getE(req.params.log_id)
    .then(x=>  res.send(x) )
    .catch(next)
});

// Get all comments on exercise logs
app.get("/exercise", (req, res, next) => {
    user.getAllE()
    .then(x=>  res.send(x) )
    .catch(next)
});

// Create comments on exercise logs
app.post("/exercise/:userid/:log_id", (req, res, next) => {
    user.createE(req.params.userid, req.params.log_id, req.body)
    .then(x=>  res.send(x) )
    .catch(next)
});

// Create comments on food logs
app.post("/food/:userid/:log_id", (req, res, next) => {
    user.createF(req.params.userid, req.params.log_id, req.body)
    .then(x=>  res.send(x) )
    .catch(next)
});


module.exports = app;