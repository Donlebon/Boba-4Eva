const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// storeName = {item.name}
// storePic = {item.image_url}
// storeLocation = {item.location.city}
// storeRating = {item.rating}
// storeReview = {item.review_count}
// storeId = {item.id}
// storeUrl = {item.url}
// isFav = {isFav}
// toggleFav = {toggleFav}

const bobaSchema = new Schema({
  storeName: String,
  storeLocation: String,
  storeId: String,
  storeUrl: String,
  isFav: Boolean,
  editMode: Boolean,
  bobaRating: {
    fav1: {
      comments: String,
      rating: Number,
    },
    fav2: {
      comments: String,
      rating: Number,
    },
    fav3: {
      comments: String,
      rating: Number,
    },
    fav4: {
      comments: String,
      rating: Number,
    },
    fav5: {
      comments: String,
      rating: Number,
    },
  },
});

const Boba = mongoose.model('Boba', bobaSchema);

module.exports = {
  Boba,
};
