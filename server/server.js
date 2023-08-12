require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');

// Routes
const getBobaCafes = require('./routes/getBobaCafes.js');
const favBobaCafes = require('./routes/favBobaCafes.js');
const allBobaCafes = require('./routes/allBobaCafes.js');
const editBobaCafes = require('./routes/editBobaCafes.js')
const deleteBobaCafes = require('./routes/deleteFavCafes.js')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mongoDataBase = process.env.MONGO_URI;

mongoose
  .connect(mongoDataBase, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'BobaProj',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

// Fav Cafes
app.post('/api/submit', favBobaCafes);

// Get all Favorite Cafes

app.get('/api/favorites/', allBobaCafes);

// Edit Existing Cafes

app.patch('/api/favorites/:id', editBobaCafes);

// Delete Existing Cafes

app.delete('/api/favorites/:id', deleteBobaCafes);

// Get Boba Cafes
app.use('/', getBobaCafes);

// Unknown Route Handler

app.use((req, res) =>
  res.status(404).send("This is not the page you're looking for...")
);

// Global Error Handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// Listening on Port 3000
app.listen(3000, () => {
  console.log(`Server listening on port: 3000`);
});
