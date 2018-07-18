
// module.exports = {
//     entry: './src/index.js',
//     output: {
//         path: __dirname + '/public',
//         filename: 'bundle.js'
//     },
//     module: {
//         rules: [{
//             test: /\.less$/,
//             use: [{
//                 loader: 'style-loader' // creates style nodes from JS strings
//             }, {
//                 loader: 'css-loader' // translates CSS into CommonJS
//             }, {
//                 loader: 'less-loader' // compiles Less to CSS
//             }]
//         }]
//     }
// };

const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDevelopment = !process.env.production;
const isProduction = process.env.production;
const distPath = path.join(__dirname, '/public');

const config = {
    entry: {
        app: './src/app.js'
    },
    output: {
        filename: 'bundle.js',
        path: distPath
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: [/node_modules/],
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['env', 'react']
                }
            }]
        }, {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [{
                loader: 'file-loader',
                options: {
                    name: 'images/[name][hash].[ext]'
                }
            }, {
                loader: 'image-webpack-loader',
                options: {
                    mozjpeg: {
                        progressive: true,
                        quality: 70
                    }
                }
            },
            ],
        }, {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name][hash].[ext]'
                }
            },
        }]
    },

    devServer: {
        contentBase: distPath,
        compress: true,
        open: true,
        port: 9000
    }
};

if (isDevelopment) {
    fs.readdirSync(distPath)
        .map((fileName) => {
            if (['.css', '.js'].includes(path.extname(fileName))) {
                return fs.unlinkSync(`${distPath}/${fileName}`);
            }

            return '';
        });
}

if (isProduction) {
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        })
    );
}

module.exports = config;