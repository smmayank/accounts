var express = require('express')
var login = express.Router()

login.get('/', function callLogin(req, res) {
    res.send('Welcome to login')
})

module.exports = login
