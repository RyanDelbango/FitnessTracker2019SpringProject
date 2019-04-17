const express = require('express');
const user = require('../models/contact');

const app = express.Router();

// Get contact information of all users
app.get("/", (req, res, next) => {
    user.getAll()
    .then(x=>  res.send(x) )
    .catch(next)
});

//Get contact information of a particular user
app.get("/:userid", (req, res, next) => {
    user.get(req.params.userid)
    .then(x=>  res.send(x) )
    .catch(next)
});

//Get contact information of friends
app.get("/friends/:userid", (req, res, next) => {
    user.friends(req.params.userid)
    .then(x=>  res.send(x) )
    .catch(next)
});

//Search users by state
app.post("/SearchState", (req, res, next) => {
    user.searchState(req.body)
    .then(x=>  res.send(x) )
    .catch(next)
});

//Search Users by city
app.post("/SearchCity", (req, res, next) => {
    user.searchCity(req.body)
    .then(x=>  res.send(x) )
    .catch(next)
});

//Edit user Contact Information
app.post("/edit/:userid", (req, res, next) => {
    user.edit(req.params.userid, req.body)
    .then(x=>  res.send(x) )
    .catch(next)
});


module.exports = app;