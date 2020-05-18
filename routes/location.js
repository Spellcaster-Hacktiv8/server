const router = require('express').Router()
const controller = require('../controllers/location.js')

router.get('/location', controller.read)

module.exports = router