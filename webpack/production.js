const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { fileModules, resolve, entry } = require('./base');

const HOST = '127.0.0.1';
const PORT = '3000';

const client = {
  mode: 'production',
  resolve,
  module: fileModules,
  entry,
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Production',
      template: path.join(__dirname, '../src/template/index.html')
    }),
  ],
  watchOptions: {
    ignored: /node_modules/
  },
  devServer: {
    contentBase: './public',
    // do not print bundle build stats
    noInfo: true,
    // enable HMR
    hot: true,
    // embed the webpack-dev-server runtime into the bundle
    inline: true,
    // serve index.html in place of 404 responses to allow HTML5 history
    historyApiFallback: true,
    port: PORT,
    host: HOST,
    proxy: {
      '*': {
        target: 'http://localhost:8080', // NOTE: your express.js server port number
        secure: false,
      },
    },
  },
};

module.exports = client;
