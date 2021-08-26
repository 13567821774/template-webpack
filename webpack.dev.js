const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const Webpack = require('webpack');
module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist')
      // publicPath: ''
    },
    compress: true,
    port: 9000,
    open: true
  },
  plugins: [new Webpack.HotModuleReplacementPlugin()]
});
