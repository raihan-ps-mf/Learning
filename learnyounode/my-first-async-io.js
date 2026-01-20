const fs = require('fs');

fs.readFile(process.argv[2], 'utf8', (err, file) => {
    if (err) {
        return console.log(err);
    }
    const lines = file.toString().split('\n').length - 1;
    console.log(lines);
});

