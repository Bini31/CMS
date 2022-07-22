const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyparser = require('body-parser');
const registerData = require('./model/registermodel');
const userauth = require('./routes/userauthrouter');
var app = new express;
app.use(cors());
app.use(bodyparser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/users', userauth);
app.listen(3000, function () {
    console.log('listening to port 3000')
});