const http = require('http');

const url = process.argv[2];
let responseData = '';
const getResponse = http.get(url, (response) => {
    response.on('data', (data) => {
        responseData += data.toString();
    });
    response.on('end', () => {
        console.log(responseData.length);
        console.log(responseData);
    });
});

return getResponse;