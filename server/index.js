const express = require('express');
const path = require('path');
const users =  require('./controllers/users');
const userModel = require('./models/user');
const profiles = require('./controllers/profiles');
const contacts = require('./controllers/contacts');
const exerciselogs = require('./controllers/exerciselogs');
const foodlogs = require('./controllers/foodlogs');
const friends = require('./controllers/friends');
const messages = require('./controllers/messages');
const comments = require('./controllers/comments');

const app = express();
const port = 3000;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});
app.use(express.static(path.join(__dirname, "../dist")));
app.use(function(req, res, next) {
  try {
    const token = (req.headers.authorization || "").split(' ')[1]
    req.user = userModel.getFromToken(token);
  } catch (error) {
    const openActions = ['POST/users/register', 'POST/users/login']
    if(req.method != "OPTIONS" && !openActions.includes(req.method + req.path)){ // check if login required
      next(Error("Login Required"));
    }
  }
  next();
});
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "../No Framework")));
app.get('/', (req, res) => res.send('Hello World!'));
app.use('/users', users);
app.use('/profiles', profiles);
app.use('/contacts', contacts);
app.use('/exerciselogs', exerciselogs);
app.use('/foodlogs', foodlogs);
app.use('/friends', friends);
app.use('/messages', messages);
app.use('/comments', comments);

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send({msg: err.message });
  })


app.listen(port, () => console.log(`Exercise app http://localhost:${port}`));