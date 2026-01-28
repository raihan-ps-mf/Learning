const http = require('http');
const async = require('async');

const url = process.argv[2];

let count = 0;
let body = '';

async.whilst(
    (callback) => callback(null, body.trim() !== 'meerkat'),
    (callback) => {
        body = '';
        http.get(url, (res) => {
            res.on('data', (chunk) => {
                body += chunk.toString();
            });
            res.on('end', () => {
                count++;
                callback();
            });
        });
    },
    (err) => {
        if (err) return console.log(err);
        console.log(count);
    }
);
