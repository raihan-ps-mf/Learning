const http = require('http')

const port = process.argv[2];

const server = http.createServer((req, res) => {
    const url = new URL(req.url, 'http://localhost');
    const iso = url.searchParams.get('iso');
    const date = new Date(iso);
    const time = date.getTime();

    let response;

    if (req.method === 'GET' && url.pathname === '/api/parsetime') {
        response = {
            "hour": date.getHours(),
            "minute": date.getMinutes(),
            "second": date.getSeconds(),
        }
    } else if (req.method === 'GET' && url.pathname === '/api/unixtime') {
        response = {
            "unixtime": time
        }
    }

    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(response));
})

server.listen(port);