const path = require('path');
const nodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { fileModules, resolve, entry } = require('./base');

const client = {
  mode: 'production',
  resolve,
  module: fileModules,
  entry,
  output: {
    path: path.join(__dirname, '../dist/public'),
    filename: 'bundle.js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Production',
      template: path.join(__dirname, '../client/template/index.html'),
    }),
  ],
};

const server = {
  mode: 'production',
  externals: [nodeExternals()],
  target: 'node',
  resolve: {
    extensions: ['.js'],
  },
  entry: [
    path.join(__dirname, '../server'),
  ],
  output: {
    publicPath: '/',
    path: path.join(__dirname, '../dist'),
    filename: 'server.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        }],
      },
    ],
  },
  plugins: [],
};

module.exports = [client, server];
