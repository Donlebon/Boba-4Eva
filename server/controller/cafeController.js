const axios = require('axios')

const cafeController = {
};


cafeController.getAllCafe = async (req, res, next) => {

    const location = req.query.location;
    const term = 'boba';
    try {
          const response = await axios.get(`https://api.yelp.com/v3/businesses/search`, {
            headers: {
              Authorization: process.env.YELP_KEY,
            },
            params: {
              location: location,
              term: term,
              sort_by: 'best_match',
              limit: 20
            }
          });
          res.locals.allBobaCafes = response.data
          return next()
        } catch (error) {
          return next({ error: 'Failed to fetch data from Yelp API' });
        }
}
 


module.exports = cafeController;