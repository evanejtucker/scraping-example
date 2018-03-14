
const axios = require('axios');
const cheerio = require('cheerio');

const upcomingMoives = ()=> {
    axios.get('https://www.fandango.com/moviescomingsoon')
    .then((res)=> {
        const $ = cheerio.load(res.data);
        let urlData = res;
        // console.log($('ul.visual-list.movie-list').children('li'));
        // console.log($('div.visual-detail'));
        $('div.visual-detail').each((i, elem)=> {
            console.log($(this).children('span.visual-sub-title'));
            console.log('------------------------');
        })
    }).catch((err)=> {
        console.log(err);
    });
}

module.exports = upcomingMoives;