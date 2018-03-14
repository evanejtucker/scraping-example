const express = require('express');
const router = express.Router();
// const upcoming = require('../scrapes/upcomingMovies');
const movies = require('../controller/fetch');

router.get('/', movies.getUpcoming, (req, res, next)=> {
    res.redirect('/');
});

module.exports = router;