const os = require('os');
var path = require('path');
var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

const getLocalIp = () => {
    let localhost = 'localhost';
    let network = os.networkInterfaces();
    try {
        localhost = network.en0[1].address;
    } catch (e) {
        if (network['本地连接']) {
            localhost = network['本地连接'][1]['address']
        }
    }
    return localhost;
}

module.exports = {
    entry: {
        main: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'aure.js'
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(s|)css/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        "css-loader",
                        'postcss-loader',
                        'sass-loader',
                    ]
                })
            },
            {
                test: /\.(woff|svg|eot|ttf)\??.*$/,
                loader: "url-loader"
            }
        ]
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new ExtractTextPlugin("aure.css"),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './demos/index.html',
            inject: true
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        inline: true,
        open: true,
        host: getLocalIp()
    }
};
