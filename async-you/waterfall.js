const http = require('http');
const fs = require('fs');

const filePath = process.argv[2];
const url = fs.readFileSync(filePath, 'utf8').trim();

let body = '';

http.get(url, (res) => {
    res.on('data', (chunk) => {
        body += chunk.toString();
    });
    res.on('end', () => {
        console.log(body);
    });
});
