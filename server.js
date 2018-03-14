const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const logger = require('morgan');
const ejs = require('ejs');
const main = require('./app/routes/mainRoutes');
const fetch = require('./app/routes/scrapeRoutes');

app.set('view engine', 'ejs');
app.use(logger('tiny'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', main);
app.use('/upcoming', fetch);

app.listen(port, ()=>{
    console.log(`app listening on port ${port}!`)
})