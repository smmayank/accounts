var express = require('express')
var auth_v0 = express.Router()

auth_v0.get('/login', function login(req, res) {
    res.send('Welcome to login')
})

module.exports = auth_v0;
