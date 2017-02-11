/**
 * Created by aditya on 11/2/17.
 */

"use strict";

let config = {
    entry: './src/app.jsx',
    output: {
        path: __dirname,
        filename: './public/js/bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_module|bower_components)/
            }
        ]
    }
};

module.exports = config;