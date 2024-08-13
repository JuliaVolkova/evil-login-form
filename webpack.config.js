const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    mode: "development",
    output: {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, 'build'),
        clean: true,
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    }
};
