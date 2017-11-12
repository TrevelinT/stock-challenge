const extractTextPlugin = require('extract-text-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const imageminWebpackPlugin = require('imagemin-webpack-plugin').default;
const webpackMerge = require('webpack-merge');
const path = require('path');

const commonConfig = require('./base.js');

module.exports = function() {
    return webpackMerge(commonConfig(), {
        module: {
            loaders: [
                {
                    test: /\.scss$/,
                    use: extractTextPlugin.extract({
                        use: ['css-loader', 'sass-loader'],
                        fallback: 'style-loader'
                    }),
                    exclude: /node_modules/
                }
            ]
        },
        plugins: [
            new cleanWebpackPlugin(['dist'], { root: path.resolve(__dirname, '..')}),
            new extractTextPlugin('styles-[contenthash:10].css'),
            new imageminWebpackPlugin({
                quality: '60-80'
            })
        ]
    });
};
