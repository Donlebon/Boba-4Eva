const express = require('express');
const app = express();
const router = express.Router()
const axios = require('axios');

const allBobaController = require('../controller/allBobaController')

router.get('/api/favorites', allBobaController.getAllFavs, (req, res, next) => {
    return res.status(200).json(res.locals.allFavCafes)
})


module.exports = router