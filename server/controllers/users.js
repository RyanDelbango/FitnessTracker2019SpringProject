const express = require('express');
const user = require('../models/user')

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

app.post("/search", (req, res) => {

    user.search(req.body, (err, data) => {
        if(err) throw err;
        res.send(data);
    });

});

app.post("/login", (req, res) => {

    user.login(req.body, (err, data) => {
        if(err) throw err;
        if (data==undefined){
            return res.status(403).send({
                error: 'The login information was incorrect'
              })
        }
        else{res.send(data)};
    });

});

app.post("/register", (req, res) => {
    console.log(req.body)
    user.add(req.body, (err, data) => {
        if(err) throw err;
        res.send(data);
    });

});


module.exports = app;