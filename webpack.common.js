const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src'),
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
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(svg|png|jpg|gif)/,
                use: ['file-loader']
            }
        ]
    }
};