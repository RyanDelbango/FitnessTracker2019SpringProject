const express = require('express');
const path = require('path');
const users =  require('./controllers/users');
const profiles = require('./controllers/profiles');
const contacts = require('./controllers/contacts');

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "../No Framework")));
app.get('/', (req, res) => res.send('Hello World!'));
app.use('/users', users);
app.use('/profiles', profiles);
app.use('/contacts', contacts);


app.listen(port, () => console.log(`Example app http://localhost:${port}`));