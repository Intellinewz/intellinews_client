'use strict';

const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const {HotModuleReplacementPlugin} = require('webpack');

const webpackDevConfig = {};
webpackDevConfig.module = {};
webpackDevConfig.mode = 'development';
webpackDevConfig.devtool = 'inline-source-map';

webpackDevConfig.devServer = {
  contentBase: './build',
  open: true,
  hot: true,
  historyApiFallback: true,
};

webpackDevConfig.plugins = [
  new HotModuleReplacementPlugin(),
];

webpackDevConfig.module.rules = [
  {
    test: /\.scss$/,
    use: [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
        options: { sourceMap: true},
      },
      {
        loader: 'sass-loader',
        options: { sourceMap: true},
      },
    ],
  },
];

module.exports = merge(commonConfig, webpackDevConfig);