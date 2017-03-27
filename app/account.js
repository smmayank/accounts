var express = require('express')
var app = express()

app.use('/api', require('./routes/api.js'))

app.listen(3000, function() {
    console.log('Example app listening to port 3000')
})
