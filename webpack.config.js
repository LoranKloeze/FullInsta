const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        bundle: './src/index.js',
        injector: './src/injector.js',
        background: './src/background.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: ''
    },
    performance: { hints: false },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            'env'
                        ]
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: "style-loader", options: { attributes: { id: 'waaStyleTag' } } },
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            },
            {
                test: /\.svg$/,
                use: [
                     'svg-inline-loader'
                ]
            },{
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            }
        ]
    },
    plugins: [
        new WriteFilePlugin(),
        new CopyWebpackPlugin(
            {
            patterns: [
                { from: 'src/manifest.json', to: 'manifest.json'},
                { from: 'src/images', to: 'images'},
            ]
        }
        )
    ]
}