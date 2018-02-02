var path = require('path');
module.exports = {
    entry: {
        main: path.resolve(__dirname, '../demos/index.js'),
    },
    output: {
        path: path.resolve(__dirname, '../dist/js'),
        filename: 'aure.js'
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(woff|svg|eot|ttf)\??.*$/,
                loader: "url-loader"
            }
        ]
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '../src')
        }
    },
};