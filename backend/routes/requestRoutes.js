const express = require('express')
const router = express.Router()
const requestController = require('../controllers/requestController')

router.route('/')
  .get(requestController.getAll)

module.exports = router