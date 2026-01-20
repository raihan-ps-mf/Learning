const http = require('http')

const urls = process.argv.slice(2)
const results = []
let queue = 0;

const output = urls.forEach((url, index) => {
    http.get(url, (response) => {
        let data = '';

        response.on('data', (chunk) => {
            data += chunk
        });

        response.on('end', () => {
            results[index] = data;
            queue++;

            if (queue === urls.length) {
                results.forEach((result) => console.log(result));
            }
        })
    })
});     