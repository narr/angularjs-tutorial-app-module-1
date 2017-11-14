'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rootPath = path.join(__dirname, '..');

function webpackConfig() {
  const config = {
    context: rootPath,
    entry: {
      vendor: './lib/vendor.js',
      main: [
        './src/main.js', // bootstrap files
        './index.js', // main module, phont-list
      ],
      app: [
        './src/app/app.module.js',
        './src/app/app.component.js',
        './src/app/app.component.html',
        './src/app/app.component.scss',
      ],
    },
    plugins: [
      new webpack.HashedModuleIdsPlugin(),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: Infinity,
      }),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        chunksSortMode: 'manual',
        chunks: [
          'vendor',
          'main',
          'app',
        ],
      }),
    ],
    module: {
      rules: [
        {
          exclude: [
            path.join(rootPath, './src/index.html'),
          ],
          test: /\.html$/,
          use: [
            {
              loader: 'ngtemplate-loader',
              options: {
                module: 'phonecatApp.template',
                relativeTo: '[path]',
              },
            },
            {
              loader: 'html-loader',
              options: {
                attrs: false,
              },
            },
          ],
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: 'style-loader',
            }, {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            }, {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[hash].[ext]',
              },
            },
          ],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[hash].[ext]',
              },
            },
          ],
        },
      ],
    },
    output: {
      filename: '[name].[chunkhash].js',
      path: path.resolve(rootPath, './dist'),
    },
    devtool: 'source-map',
    devServer: {
      publicPath: '/',
      contentBase: './assets',
      port: 8080,
    },
  };

  return config;
}

module.exports = webpackConfig;
