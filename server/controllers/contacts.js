const express = require('express');
const user = require('../models/contact');

const app = express.Router();

// Get contact information of all users
app.get("/", (req, res) => {

    user.getAll((err, data) => {
        if(err) throw err;
        res.send(data);
    });

});

//Get contact information of a particular user
app.get("/:userid", (req, res) => {

    user.get(req.params.userid, (err, data) => {
        if(err) throw err;
        res.send(data);
    });

});

//Get contact information of friends
app.get("/friends/:userid", (req, res) => {

    user.friends(req.params.userid, (err, data) => {
        if(err) throw err;
        res.send(data);
    });

});

//Search users by state
app.post("/SearchState", (req, res) => {

    user.searchState(req.body, (err, data) => {
        if(err) throw err;
        res.send(data);
    });

});

//Search Users by city
app.post("/SearchCity", (req, res) => {

    user.searchCity(req.body, (err, data) => {
        if(err) throw err;
        res.send(data);
    });

});

//Edit user Contact Information
app.post("/edit/:userid", (req, res) => {
    user.edit(req.params.userid, req.body, (err, data) => {
        if(err) throw (err);
        res.send(data);
    });

});


module.exports = app;