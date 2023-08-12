const express = require('express');
const app = express();
const router = express.Router()
const axios = require('axios');

const deleteController = require('../controller/deleteController')

router.delete('/api/favorites/:id', deleteController.deleteCafe, (req, res, next) => {
    return res.status(200).json('Deleted Boba Cafe')
})


module.exports = router