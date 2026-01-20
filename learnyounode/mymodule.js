const fs = require('fs');
const path = require('path');

const mymodule = (directory, extension, callback) => {
    fs.readdir(directory, (err, list) => {
        if (err) {
            return callback(err);
        }

        const filtered = list.filter(file => path.extname(file) === `.${extension}`);
        callback(null, filtered);
    });
};

module.exports = mymodule;