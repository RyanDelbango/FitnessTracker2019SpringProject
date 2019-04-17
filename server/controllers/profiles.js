const express = require('express');
const user = require('../models/profile')

const app = express.Router();

// Get all user profiles
app.get("/", async (req, res, next) => {
    user.getAll()
    .then(x=>  res.send(x) )
    .catch(next)
});

// Get profile of a particular user
app.get("/:userid", (req, res, next) => {
    user.get(req.params.userid)
    .then(x=>  res.send(x) )
    .catch(next)
});

// Edit profile of a particular user
app.post("/edit/:userid", (req, res, next) => {
    user.edit(req.params.userid, req.body)
    .then(x=> res.send(x) )
    .catch(next)
});


module.exports = app;