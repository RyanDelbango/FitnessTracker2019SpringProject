const express = require('express');
const user = require('../models/foodlog');

const app = express.Router();

// Get all food Logs of all Users
app.get("/", (req, res) => {

    user.getAll((err, data) => {
        if(err) throw err;
        res.send(data);
    });

});

// Get food logs of a particular user
app.get("/:userid", (req, res) => {

    user.get(req.params.userid, (err, data) => {
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

// Total calories consumbed by a user
app.get("/totalcalories/:userid", (req, res) => {

    user.total(req.params.userid, (err, data) => {
        if(err) throw err;
        res.send(data);
    });

});

//Average monthly calories by user
app.get("/averagecalories/:userid", (req, res) => {

    user.average(req.params.userid, (err, data) => {
        if(err) throw err;
        res.send(data);
    });

});

// Create a food log
app.post("/create/:userid", (req, res) => {
    user.create(req.params.userid, req.body, (err, data) => {
        if(err) throw (err)
        res.send(data);
    });

});

// Edit an existing food log
app.post("/edit/:userid/:logid", (req, res) => {
    user.edit(req.params.userid, req.params.logid, req.body, (err, data) => {
        if(err) throw (err);
        res.send(data);
    });

});


module.exports = app;