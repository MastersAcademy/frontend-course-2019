const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const distFolderName = 'dist';

module.exports = {
    entry: './src/js/main.ts',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [
            '.ts', '.js',
        ],
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, `${distFolderName}/js/`),
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, distFolderName),
        writeToDisk: true,
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
            { from: './src', to: path.resolve(__dirname, distFolderName), ignore: ['*.js', '*.ts'] },
        ]),
    ],
}
