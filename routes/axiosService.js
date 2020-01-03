const axios = require('axios');
const url = 'https://aussiesaustin.com/TournamentDetails/1636';
const url2 = 'https://aussiesaustin.com/TournamentDetails/1637'

const getPage = new Promise((resolve, reject) => {
    axios.get(url)
    .then(function (response) {
        // console.log(response);
        console.log('Whoaaa it runs!');
        return resolve(response);
    })
    .catch(function (err) {
        return reject('An Error');
    })
})

exports.getPage = getPage;