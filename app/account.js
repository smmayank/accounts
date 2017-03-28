var express = require('express')
var logger = require('morgan')
var app = express()

global.db = require('../models')
global.utils = require('./utils')

app.use(logger('tiny'))
app.use('/', require('./routes'))

// route not found
app.use(function(req, res, next) {
    res.status(404).send('Earth is flat, and you found an edge')
})

// error case
app.use(function(err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

var port = process.env.ACCOUNT_PORT || 3000

app.listen(port, function() {
    console.log('Example app listening to port', port)
})
