const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src'),
    output: {
        filename: 'main.[contentHash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/template.html')
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