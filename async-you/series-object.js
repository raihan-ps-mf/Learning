const http = require('http');
const async = require('async');

const url1 = process.argv[2];
const url2 = process.argv[3];

async.series({
    requestOne: (callback) => {
        let body = '';
        http.get(url1, (res) => {
            res.on('data', (chunk) => {
                body += chunk.toString();
            });
            res.on('end', () => {
                callback(null, body);
            });
        });
    },
    requestTwo: (callback) => {
        let body = '';
        http.get(url2, (res) => {
            res.on('data', (chunk) => {
                body += chunk.toString();
            });
            res.on('end', () => {
                callback(null, body);
            });
        });
    }
}, (err, results) => {
    console.log(results);
});