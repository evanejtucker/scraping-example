
const upcoming = require('../scrapes/upcomingMovies');

module.exports = {
    getUpcoming: function(req, res, next) {
        upcoming()
        next()
    }
}