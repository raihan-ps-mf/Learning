const http = require('http');

const url = process.argv[2];
const getResponse = http.get(url, (response) => {
    response.on('data', (data) => {
        console.log(data.toString());
    });
});

return getResponse;