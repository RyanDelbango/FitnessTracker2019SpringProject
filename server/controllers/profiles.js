const express = require('express');
const user = require('../models/profile')

const app = express.Router();

// Get all user profiles
app.get("/", (req, res) => {

    user.getAll((err, data) => {
        if(err) throw err;
        res.send(data);
    });

});

// Get profile of a particular user
app.get("/:userid", (req, res) => {

    user.get(req.params.userid, (err, data) => {
        if(err) throw err;
        res.send(data);
    });

});

// Edit profile of a particular user
app.post("/edit/:userid", (req, res) => {
    user.edit(req.params.userid, req.body, (err, data) => {
        if(err) throw (err);
        res.send(data);
    });

});


module.exports = app;