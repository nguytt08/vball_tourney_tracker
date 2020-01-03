var express = require('express');
var router = express.Router();
const axiosService = require('./axiosService');
const cheerio = require('cheerio');

var text;



router.get('/', function(req, res, next) {

    // text = axiosService.getPage();
    const callAxios = (header) => {
        axiosService.getPage
        .then((fulfilled) => {
            // text = fulfilled;
            // console.log(fulfilled);
            text = fulfilled.data;
            const data = cheerio.load(text);
            const textToPrint = data(header).filter(function() {
                return data(this).text().trim() === 'There are 0 spots open out of 12.';
            }).text();
    // res.render('tournaments', {tournaments: data(header).text()})
        res.render('tournaments', {tournaments: textToPrint})

        })
        .catch(error => {
            console.log(error);
        })
    }

    // callAxios('h3');

    // callAxios('#pnlGlobalMessages');

    callAxios('html')



})

module.exports = router;