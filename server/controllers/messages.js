const express = require('express');
const user = require('../models/message');

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

app.get("/friends/:userid", (req, res) => {

    user.friends(req.params.userid, (err, data) => {
        if(err) throw err;
        res.send(data);
    });

});

app.post("/search", (req, res) => {

    user.search(req.body, (err, data) => {
        if(err) throw err;
        res.send(data);
    });

});


app.post("/sendmessage/:userid/:idTo", (req, res) => {
    user.create(req.params.userid, req.params.idTo, req.body, (err, data) => {
        if (err) throw (err)
        res.send(data);
    });

});


module.exports = app;