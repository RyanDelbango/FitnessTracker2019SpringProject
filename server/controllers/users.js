const express = require('express');
const user = require('../models/user')

const app = express.Router();

// Get all user information
app.get("/", async (req, res, next) => {
    user.getAll()
    .then(x=>  res.send(x) )
    .catch(next)
});

// Get user information of a particular User
app.get("/:userid", (req, res) => {

    user.get(req.params.userid, (err, data) => {
        if(err) throw err;
        res.send(data);
    });

});

// Search Users by last name
app.post("/search", (req, res) => {

    user.search(req.body, (err, data) => {
        if(err) throw err;
        res.send(data);
    });

});

// Login to app
app.post("/login", (req, res, next) => {
    user.login(req.body.email, req.body.password)
    .then(x=> res.send(x) )
    .catch(next)
});

//Register to app
app.post("/register", (req, res, next) => {
    user.add(req.body)
    .then(x=>  res.send(x) )
    .catch(next)
});


module.exports = app;