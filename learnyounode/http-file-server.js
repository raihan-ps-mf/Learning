const http = require('http')
const fs = require('fs')

const port = process.argv[2];
const file = process.argv[3];

const server = http.createServer((req, res) => {
    const fileStream = fs.createReadStream(file);
    fileStream.pipe(res);
})


server.listen(port);