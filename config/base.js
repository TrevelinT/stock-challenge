const resolve = require('path').resolve;
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = function() {
    return {
        entry: {
            'polyfill': 'babel-polyfill',
            'react': ['react', 'react-dom'],
            'redux': ['redux', 'react-redux'],
            'main': resolve(__dirname, '../src/index.js')
        },
        output: {
            path: resolve(__dirname, '../dist'),
            publicPath: '',
            filename: '[name].[hash:12].js',
            sourceMapFilename: '[name].map'
        },
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    use: ['babel-loader'],
                    exclude: /node_modules/
                },
                {
                    test: /\.js$/,
                    enforce: 'pre',
                    use: ['eslint-loader'],
                    exclude: /node_modules/
                },
                {
                    test: /\.(jpg|gif|png)$/,
                    use: ['url-loader?limit=10000&name=images/[name].[hash:12].[ext]'],
                    exclude: /node_modules/
                }
            ]
        },
        plugins: [
            new HTMLWebpackPlugin({
                template: './index-template.html'
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: ['polyfills', 'react', 'redux'].reverse()
            })
        ]
    };
};
