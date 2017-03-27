var express = require('express')
var api = express.Router()

api.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

api.use('/v0', require('./auth_v0.js'))

module.exports = api
