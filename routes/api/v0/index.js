var express = require('express')
var v0 = express.Router()

v0.use('/login', require('./login.js'))

module.exports = v0
