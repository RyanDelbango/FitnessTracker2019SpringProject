const express = require('express');
const user = require('../models/exerciselog')

const app = express.Router();

// Get all exercise logs from all users
app.get("/", (req, res) => {

    user.getAll((err, data) => {
        if(err) throw err;
        res.send(data);
    });

});

// Get exercise logs of a particular user
app.get("/:userid", (req, res) => {

    user.get(req.params.userid, (err, data) => {
        if(err) throw err;
        res.send(data);
    });

});

// Get a particular exercise log
app.get("/logs/:log_id", (req, res) => {

    user.getLog(req.params.log_id, (err, data) => {
        if(err) throw err;
        res.send(data);
    });

});

// Get exercise logs of friends
app.get("/friends/:userid", (req, res) => {

    user.friends(req.params.userid, (err, data) => {
        if(err) throw err;
        res.send(data);
    });

});

// Get average weight monthly weight of a user
app.get("/averageWeight/:userid", (req, res) => {

    user.averageW(req.params.userid, (err, data) => {
        if(err) throw err;
        res.send(data);
    });

});

// Get average monthly time working out of a user
app.get("/averageTime/:userid", (req, res) => {

    user.averageT(req.params.userid, (err, data) => {
        if(err) throw err;
        res.send(data);
    });

});

// Search exercise logs for a particular type of exercise
app.post("/searchType", (req, res) => {

    user.searchType(req.body, (err, data) => {
        if(err) throw err;
        res.send(data);
    });

});

// Create an exercise log
app.post("/create/:userid", (req, res) => {
    user.create(req.params.userid, req.body, (err, data) => {
        if(err) throw (err);
        res.send(data);
    });

});

// Edit an exercise log
app.post("/edit/:userid/:logid", (req, res) => {
    user.edit(req.params.userid, req.params.logid, req.body, (err, data) => {
        if(err) throw (err);
        res.send(data);
    });

});


module.exports = app;