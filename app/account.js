var express = require('express')
var logger = require('morgan')
var app = express()

app.use(logger('tiny'))
app.use('/', require('./routes'))

var port = process.env.ACCOUNT_PORT || 3000

global.db = require('../models')

app.listen(port, function() {
    console.log('Example app listening to port', port)
})
