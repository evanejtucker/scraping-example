
const axios = require('axios');
const cheerio = require('cheerio');

const upcomingMoives = ()=> {
    axios.get('https://www.rottentomatoes.com/browse/in-theaters/')
    .then((res)=> {
        var $ = cheerio.load(res.data);
        $('ul.nav.nav-pils.nav-stacked.navigator-menu').children().each((i, element)=>{
            console.log('working')
        })
        // console.log($('ul.nav.nav-pils.nav-stacked.navigator-menu').children());
    }).catch((err)=> {
        console.log(err);
    });
}

module.exports = upcomingMoives;