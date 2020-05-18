const router = require('express').Router()
const location = require('./location')

router.use('/', location)

module.exports = router