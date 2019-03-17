const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader', // Runs third, attaches CSS to DOM
                    'css-loader', // Runs second, converts CSS into CommonJS
                    'sass-loader' // Runs first, converts SASS into CSS
                ]
            }
        ]
    }
};