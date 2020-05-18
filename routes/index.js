const router = require('express').Router()
const location = require('./location')
const question = require('./question')

router.use('/', location)
router.use('/', question)

module.exports = router