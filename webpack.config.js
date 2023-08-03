const path = require('path');
const HtmlWebpackpllugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devTool: 'inline-source-map',
    plugins: [
        new HtmlWebpackpllugin({
            title: 'Restaurant',
            template: './src/index-template.html',
        }),
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
};