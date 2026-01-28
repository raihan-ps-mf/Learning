const http = require('http');
const async = require('async');

const hostname = process.argv[2];
const port = process.argv[3];
const url = 'http://' + hostname + ':' + port;

async.series({
    postRequests: (callback) => {
        async.times(5, (n, next) => {
            const data = JSON.stringify({ user_id: n + 1 });
            const options = {
                hostname: hostname,
                port: port,
                path: '/users/create',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Length': Buffer.byteLength(data)
                }
            };
            const req = http.request(options, (res) => {
                res.on('data', () => {});
                res.on('end', () => {
                    next();
                });
            });
            req.end(data);
        }, callback);
    },
    getRequest: (callback) => {
        let body = '';
        http.get(url + '/users', (res) => {
            res.on('data', (chunk) => {
                body += chunk.toString();
            });
            res.on('end', () => {
                callback(null, body);
            });
        });
    }
}, (err, results) => {
    if (err) return console.log(err);
    console.log(results.getRequest);
});
