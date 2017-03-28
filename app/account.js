var express = require('express')
var app = express()

app.use('/api', require('./routes/api.js'))

var port = process.env.ACCOUNT_PORT || 3000

app.listen(port, function() {
    console.log('Example app listening to port', port)
})
