var express = require('express')
var api = express.Router()

api.use('/v0', require('./v0'))

module.exports = api
