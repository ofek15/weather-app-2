const express = require('express')
const { fetchweather} = require('../controllers/weatherController')
const router = express.Router()

router.post('/fetchweather', fetchweather)

module.exports = router