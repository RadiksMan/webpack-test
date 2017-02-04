'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

module.exports = {
    entry: './home',
    output: {
        filename: "build.js",
        library: "home"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },


    watch:NODE_ENV == 'development',
    watchOptions:{
        aggregateTimeout: 100
    },

    devtool:NODE_ENV == 'development' ? "cheap-inline-module-source-map" : null;

    plugins: [

    ]


};