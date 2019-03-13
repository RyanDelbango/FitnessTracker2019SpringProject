const express = require('express');
const user = require('../models/contact')

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

app.post("/SearchState", (req, res) => {

    user.searchState(req.body, (err, data) => {
        if(err) throw err;
        res.send(data);
    });

});

app.post("/SearchCity", (req, res) => {

    user.searchCity(req.body, (err, data) => {
        if(err) throw err;
        res.send(data);
    });

});

app.post("/edit", (req, res) => {
    console.log(req.body)
    user.edit(req.body, (err, data) => {
        if(err) throw (err);
        res.send(data);
    });

});


module.exports = app;