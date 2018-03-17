
const axios = require('axios');
const cheerio = require('cheerio');

const upcomingMoives = ()=> {
    axios.get('http://injustice.wikia.com/wiki/Category:Injustice_2_Playable_Characters')
    .then((res)=> {
        var $ = cheerio.load(res.data);
        // let characters = $('div-title').children();
        // console.log(characters);
        $('div.title').each((i, element)=> {
            console.log(element.children[0].data);
        })
    }).catch((err)=> {
        console.log(err);
    });
}

module.exports = upcomingMoives;