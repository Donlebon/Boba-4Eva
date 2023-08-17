const express = require('express');
const app = express();
const router = express.Router()
const axios = require('axios');

const editBobaController = require('../controller/editBobaController')

router.patch('/api/favorites/:id', editBobaController.editCafe, (req, res, next) => {
    return res.status(200).json('Edited Boba successfully')
})


module.exports = router