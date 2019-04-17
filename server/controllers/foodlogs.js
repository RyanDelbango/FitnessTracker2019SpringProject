const express = require('express');
const user = require('../models/foodlog');

const app = express.Router();

// Get all food Logs of all Users
app.get("/", (req, res, next) => {
    user.getAll()
        .then(x=>  res.send(x) )
        .catch(next)
    });

// Get food logs of a particular user
app.get("/:userid", (req, res, next) => {
    user.get(req.params.userid)
    .then(x=>  res.send(x) )
    .catch(next)
});

// Get a particular food log
app.get("/logs/:log_id", (req, res, next) => {
    user.getLog(req.params.log_id)
    .then(x=>  res.send(x) )
    .catch(next)
});

// Get exercise logs of friends
app.get("/friends/:userid", (req, res, next) => {
    user.friends(req.params.userid)
    .then(x=>  res.send(x) )
    .catch(next)
});

// Total daily calories consumbed by a user
app.get("/totalcalories/:userid", (req, res, next) => {
    user.total(req.params.userid)
    .then(x=>  res.send(x) )
    .catch(next)
});

// Average monthly calories by user
app.get("/averagecalories/:userid", (req, res, next) => {
    user.average(req.params.userid)
    .then(x=>  res.send(x) )
    .catch(next)
});

// Create a food log
app.post("/create/:userid", (req, res, next) => {
    user.create(req.params.userid, req.body)
    .then(x=>  res.send(x) )
    .catch(next)
});

// Edit an existing food log
app.post("/edit/:userid/:logid", (req, res, next) => {
    user.edit(req.params.userid, req.params.logid, req.body)
    .then(x=>  res.send(x) )
    .catch(next)
});


module.exports = app;