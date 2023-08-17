// MongoDB Schema
const models = require('../models/bobamodels.js');
const mongoose = require('mongoose');

const deleteController = {};

deleteController.deleteCafe = async (req, res, next) => {
  const cafeId = req.params.id;
  
  try {
    const removedCafe = await models.Boba.findOneAndDelete({_id: cafeId})
    return next();
  } catch (err) {
    console.log('Cannot delete favorite cafe', err);
    return next({ err: 'Cannot delete favorite cafe' });
  }
};

module.exports = deleteController;