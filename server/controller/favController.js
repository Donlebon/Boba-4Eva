// MongoDB Schema
const models = require('../models/bobamodels.js');
const mongoose = require('mongoose');

const favController = {};

favController.favCafes = async (req, res, next) => {
  const newData = req.body; // Assuming you're using body-parser middleware to parse the request body
  console.log(newData);

  // Create a new document using the Mongoose model

  try {
    await models.Boba.create(newData);
    console.log('Data saved to MongoDB');
    return next();
  } catch (err) {
    console.log('Error saving data to MongoDB', err);
    return next({ err: 'Error saving data to MongoDB' });
  }
};

module.exports = favController;
