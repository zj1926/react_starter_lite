const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { fileModules, resolve, entry } = require('./base');

const client = {
  mode: 'production',
  resolve,
  module: fileModules,
  entry,
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Production',
      template: path.join(__dirname, '../src/template/index.html'),
    }),
  ],
};

module.exports = client;
