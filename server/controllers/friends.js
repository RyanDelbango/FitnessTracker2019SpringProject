const express = require('express');
const user = require('../models/friend')

const app = express.Router();

// View All Friendships
app.get("/", async (req, res, next) => {
    user.getAll()
    .then(x=>  res.send(x) )
    .catch(next)
});

// View Friends of a particular user
app.get("/:userid", (req, res, next) => {
    user.get(req.params.userid)
    .then(x=>  res.send(x) )
    .catch(next)
});

// Search by last name
app.post("/searchlastName/:userid", (req, res, next) => {
    user.searchlastName(req.params.userid, req.body)
    .then(x=>  res.send(x) )
    .catch(next)
});

//Add Friends
app.post("/add/:userid/:friendid", (req, res, next) => {
    user.add(req.params.userid, req.params.friendid)
    .then(x=>  res.send(x) )
    .catch(next)
});


module.exports = app;