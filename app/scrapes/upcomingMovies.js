
const axios = require('axios');
const cheerio = require('cheerio');

const upcomingMoives = ()=> {
    axios.get('https://www.fandango.com/moviescomingsoon')
    .then((response)=> {
        console.log(response); 
        let urlData = response;
    }).catch((err)=> {
        console.log(err);
    });
}

module.exports = upcomingMoives;