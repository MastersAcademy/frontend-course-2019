const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // eslint-disable-line
const HtmlWebpackPlugin = require('html-webpack-plugin'); // eslint-disable-line
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // eslint-disable-line

module.exports = {
    mode: 'development',
    entry: './src/bundle.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(css)$/,
                use: ExtractTextPlugin.extract(
                    {
                        fallback: 'style-loader',
                        use: ['css-loader'],
                    },
                ),
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(), new ExtractTextPlugin({ filename: 'style.css' }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: false,
            template: './src/index.html',
            filename: 'index.html',
        }),
    ],
};
