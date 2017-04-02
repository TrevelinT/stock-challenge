const extractTextPlugin = require('extract-text-webpack-plugin');
const webpackMerge = require('webpack-merge');

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
            new extractTextPlugin('styles-[contenthash:10].css')
        ]
    });
};
