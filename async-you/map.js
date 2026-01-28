const http = require('http');
const async = require('async');

const url1 = process.argv[2];
const url2 = process.argv[3];

async.map([url1, url2], (url, callback) => {
    let body = '';
    http.get(url, (res) => {
        res.on('data', (chunk) => {
            body += chunk.toString();
        });
        res.on('end', () => {
            callback(null, body);
        });
    });
}, (err, results) => {
    if (err) return console.log(err);
    console.log(results);
});