// MongoDB Schema
const models = require('../models/bobamodels.js')
const mongoose = require('mongoose');

const allBobaController = {}

allBobaController.getAllFavs = async (req, res, next) => {
      
    try{
      const favCafes = await models.Boba.find({})
      res.locals.allFavCafes = favCafes
      return next()
    }
    catch(err){
      console.log('Error returning data', err)
      return next({err: 'Error returning data'})
    }
    
}

module.exports = allBobaController