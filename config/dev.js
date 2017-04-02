const resolve = require('path').resolve;
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const webpackDashboard = require('webpack-dashboard/plugin');
const openBrowserPlugin = require('open-browser-webpack-plugin');

const commonConfig = require('./base.js');

module.exports = function() {
    return webpackMerge(commonConfig(), {
        module: {
            loaders: [
                {
                    test: /\.scss$/,
                    use: ['style-loader', 'css-loader', 'sass-loader'],
                    exclude: /node_modules/
                }
            ]
        },
        devtool: 'inline-source-map',
        devServer: {
            historyApiFallback: true,
            // stats: 'errors-only',
            port: '3000',
            host: 'localhost',
            hot: true,
            contentBase: resolve(__dirname, '../dist'),
            publicPath: '/'
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NamedModulesPlugin(),
            new webpackDashboard({ port: 3000 }),
            new openBrowserPlugin({ url: 'http://localhost:3000' })
        ]
    });
};
