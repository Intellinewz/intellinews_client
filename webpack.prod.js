'use strict';

const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const MiniCssPlugin = require('mini-css-extract-plugin');

const webpackProdConfig = {};
webpackProdConfig.module = {};
webpackProdConfig.mode = {};

webpackProdConfig.plugins = [
  new MiniCssPlugin({
    filename: '[name].[hash].css',
  }),
];

webpackProdConfig.module.rules = [{
  test: /\.scss$/,
  use: [
    MiniCssPlugin.loader,
    'css-loader',
    'sass-loader',
  ],
}];

module.exports = merge(commonConfig, webpackProdConfig);