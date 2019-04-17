const express = require('express');
const user = require('../models/exerciselog')

const app = express.Router();

// Get all exercise logs from all users
app.get("/", (req, res, next) => {
    user.getAll()
    .then(x=>  res.send(x) )
    .catch(next)
});

// Get exercise logs of a particular user
app.get("/:userid", (req, res, next) => {
    user.get(req.params.userid)
    .then(x=>  res.send(x) )
    .catch(next)
});

// Get a particular exercise log
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

// Get average weight monthly weight of a user
app.get("/averageWeight/:userid", (req, res, next) => {
    user.averageW(req.params.userid)
    .then(x=>  res.send(x) )
    .catch(next)
});

// Get average monthly time working out of a user
app.get("/averageTime/:userid", (req, res, next) => {
    user.averageT(req.params.userid)
    .then(x=>  res.send(x) )
    .catch(next)
});

// Search exercise logs for a particular type of exercise
app.post("/searchType", (req, res, next) => {
    user.searchType(req.body)
    .then(x=>  res.send(x) )
    .catch(next)
});

// Create an exercise log
app.post("/create/:userid", (req, res, next) => {
    user.create(req.params.userid, req.body)
    .then(x=>  res.send(x) )
    .catch(next)
});

// Edit an exercise log
app.post("/edit/:userid/:logid", (req, res, next) => {
    user.edit(req.params.userid, req.params.logid, req.body)
    .then(x=>  res.send(x) )
    .catch(next)
});


module.exports = app;