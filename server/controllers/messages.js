const express = require('express');
const user = require('../models/message');

const app = express.Router();

// Get all messages by all users
app.get("/", async (req, res, next) => {
    user.getAll()
    .then(x=>  res.send(x) )
    .catch(next)
});

// Get all messages a user has been sent
app.get("/:userid", (req, res, next) => {
    user.get(req.params.userid)
    .then(x=>  res.send(x) )
    .catch(next)
});

// Get all messages from friends
app.get("/friends/:userid", (req, res, next) => {
    user.friends(req.params.userid)
        .then(x=>  res.send(x) )
        .catch(next)
});

// Search all messages
app.post("/search", (req, res, next) => {
    user.search(req.body)
    .then(x=>  res.send(x) )
    .catch(next)
});

// Send a message
app.post("/sendmessage/:userid/:idTo", (req, res, next) => {
    user.create(req.params.userid, req.params.idTo, req.body)
    .then(x=>  res.send(x) )
    .catch(next)
});


module.exports = app;