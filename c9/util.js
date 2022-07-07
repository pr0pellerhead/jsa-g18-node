const fs = require('fs');

const fileRead = async (file) => {
    return new Promise((success, fail) => {
        fs.readFile(file, 'utf-8', (err, data) => {
            if (err) return fail(err);
            return success(data);
        });
    });
};

const fileWrite = async (file, data) => {
    return new Promise((success, fail) => {
        fs.writeFile(file, data, err => {
            if (err) return fail(err);
            return success();
        });
    });
};

module.exports = {
    fileRead,
    fileWrite
};