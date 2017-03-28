var express = require('express')
var router = express.Router()

router.use('/api', require('./api.js'))

router.use(require('./logger.js'))

module.exports = router
