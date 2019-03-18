const express = require('express');
const user = require('../models/friend')

const app = express.Router();

app.get("/", (req, res) => {

    user.getAll((err, data) => {
        if(err) throw err;
        res.send(data);
    });

});
app.get("/:userid", (req, res) => {

    user.get(req.params.userid, (err, data) => {
        if(err) throw err;
        res.send(data);
    });

});

app.post("/searchlastName", (req, res) => {

    user.searchlastName(req.body, (err, data) => {
        if(err) throw err;
        res.send(data);
    });

});

app.post("/browse", (req, res) => {

    user.browse(req.body, (err, data) => {
        if(err) throw err;
        res.send(data);
    });

});

app.post("/add/:userid/:friendid", (req, res) => {
    user.add(req.params.userid, req.params.friendid, (err, data) => {
        if(err) throw (err);
        res.send(data);
    });

});


module.exports = app;