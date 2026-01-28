const http = require('http');
const async = require('async');

const url = process.argv[2];

async.reduce(['one', 'two', 'three'], 0, (sum, item, callback) => {
    http.get(url + '?number=' + item, (res) => {
        let body = '';
        res.on('data', (chunk) => {
            body += chunk.toString();
        });
        res.on('end', () => {
            callback(null, sum + Number(body));
        });
    });
}, (err, result) => {
    if (err) return console.log(err);
    console.log(result);
});
