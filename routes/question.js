const router = require('express').Router()
const controller = require('../controllers/question')

router.get('/questions', controller.read)
// router.get('/result', controller.result)

module.exports = router