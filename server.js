const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

const db = require('./config/db').MongoURI;

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

const app = express();

const appointment = require('./routes/appointment');

const port = 3000;

// Cors Middleware
//app.use(cors());

//app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

// Use Route
app.use('/appointment', appointment);

// Index Route
app.get('/', (req, res) => {
    res.send('invalid endpoint')
})

app.listen(port, () => {
    console.log('Server started on port: ' + port)
})

