// MongoDB Schema
const models = require('../models/bobamodels.js');
const mongoose = require('mongoose');

const deleteController = {};

deleteController.deleteCafe = async (req, res, next) => {
  const cafeId = req.params.id;
  
  try {
    console.log('Delete Favorite Cafe Successful');
    const removedCafe = await models.Boba.findOneAndDelete({_id: cafeId})
    return next();
  } catch (err) {
    console.log('Error deleting cafe', err);
    return next({ err: 'Error deleting cafe' });
  }
};

module.exports = deleteController;