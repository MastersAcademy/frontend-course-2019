const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'form-validation.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
