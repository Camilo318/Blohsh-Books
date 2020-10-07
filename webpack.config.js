const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    mode: process.env.NODE_ENV,
    devtool: 'inline-source-map',
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
    ],

    module:{
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
}