const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.[contentHash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html',
        })
    ],
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