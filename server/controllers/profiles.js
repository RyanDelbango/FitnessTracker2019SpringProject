const express = require('express');
const user = require('../models/profile')

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

app.post("/edit", (req, res) => {
    console.log(req.body)
    user.edit(req.body, (err, data) => {
        if(err) throw (err);
        res.send(data);
    });

});


module.exports = app;