var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        getDiff: './src/object-diff.js',
        mergeDiff: './src/merge-diff.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]-bundle-[hash].js'
    },

    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader'
            }
        }]
    },

    devServer: {
        // contentBase: path.join(__dirname, "dist"),
        port: 3333,
        hot: true // 让 dev-server 开启 HMR
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            chunks: ['getDiff']
        }),
        new HtmlWebpackPlugin({
            filename: 'merge-diff.html',
            template: 'index.html',
            chunks: ['mergeDiff']
        }),
        new webpack.HotModuleReplacementPlugin(), // 启动全局 HMR
        new DashboardPlugin()
    ]
}