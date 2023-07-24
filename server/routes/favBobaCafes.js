const express = require('express');
const app = express();
const router = express.Router()

const getFavController = require('../controller/favController')


router.post('/api/submit', getFavController.favCafes, (req, res, next) => {
    console.log("Data has been succesfully sent to MongoDB")
    return res.status(200).json('Successfully favorited')
})

module.exports = router