const http = require('http');
const async = require('async');

const url1 = process.argv[2];
const url2 = process.argv[3];

async.each([url1, url2], (url, callback) => {
    http.get(url, (res) => {
        res.on('data', () => { });
        res.on('end', () => {
            callback();
        });
    });
}, (err) => {
    if (err) console.log(err);
});