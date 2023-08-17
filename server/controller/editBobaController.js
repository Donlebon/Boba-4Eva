// MongoDB Schema
const models = require('../models/bobamodels.js');
const mongoose = require('mongoose');

const editController = {};

editController.editCafe = async (req, res, next) => {
  const newData = req.body; 
  const params = req.params.id;

  const editedCafe = newData.filter((id) => id["_id"] === params)
  const doc = await models.Boba.findOneAndUpdate({_id: params}, {bobaRating: editedCafe[0].bobaRating})

  try {
    return next();
  } catch (err) {
    console.log('Cannot edit favorite cafes', err);
    return next({ err: 'Cannot edit favorite cafes' });
  }
};

module.exports = editController;
