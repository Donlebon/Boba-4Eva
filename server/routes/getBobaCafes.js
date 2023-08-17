const express = require('express');
const app = express();
const router = express.Router()
const axios = require('axios');

const cafeController = require('../controller/cafeController')


router.get('/api/search', cafeController.getAllCafe, (req, res, next) => {
    return res.status(200).json(res.locals.allBobaCafes)
})


module.exports = router