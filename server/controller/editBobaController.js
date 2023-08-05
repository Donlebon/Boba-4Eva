// MongoDB Schema
const models = require('../models/bobamodels.js');
const mongoose = require('mongoose');

const editController = {};

editController.editCafe = async (req, res, next) => {
  const newData = req.body; 
  const params = req.params;

  console.log(params)

  console.log(newData)
  try {
    console.log('Editing data successful');
    return next();
  } catch (err) {
    console.log('Error editing data to MongoDB', err);
    return next({ err: 'Error editing data in MongoDB' });
  }
};

module.exports = editController;
