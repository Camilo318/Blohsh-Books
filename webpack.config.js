const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: './Frontend/src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'Backend/public')
    },


    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './Frontend/public/index.html',
            inject: true
        })
    ]
}