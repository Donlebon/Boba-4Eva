// MongoDB Schema
const models = require('../models/bobamodels.js');
const mongoose = require('mongoose');

const favController = {};

favController.favCafes = async (req, res, next) => {
  const newData = req.body;

  // Create a new document using the Mongoose model

  try {
    await models.Boba.create(newData);
    return next();
  } catch (err) {
    console.log('Cannot favorite boba cafe', err);
    return next({ err: 'Cannot favorite boba cafe' });
  }
};

module.exports = favController;
