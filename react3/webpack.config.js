var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
    entry: {
        app: path.resolve(APP_PATH, 'index.jsx')
    },
    output: {
        path: BUILD_PATH,
        filename: 'bound.js'
    },
    //enable dev source map
    devtool: 'eval-source-map',
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                include: ROOT_PATH,
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }           
        ]
    },
    plugins: [
        new HtmlwebpackPlugin({
            title: 'My first react app'
        })
    ]
}
