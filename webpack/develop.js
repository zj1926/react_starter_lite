const path = require('path');
const nodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ServerStartPlugin = require('./plugins/ServerStartPlugin');
const { fileModules, resolve, entry } = require('./base');

const appEnvs = {
  NODE_ENV: 'development',
};

const client = {
  watch: true,
  mode: 'development',
  devtool: 'inline-source-map',
  resolve,
  module: fileModules,
  entry,
  output: {
    path: path.join(__dirname, '../local/public'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: path.join(__dirname, '../client/template/index.html'),
    }),
  ],
  watchOptions: {
    ignored: /node_modules/,
  },
};

const server = {
  watch: true,
  mode: 'development',
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
    path: path.join(__dirname, '../local'),
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
  plugins: [
    new ServerStartPlugin(appEnvs),
  ],
  watchOptions: {
    ignored: /node_modules/,
  },
};

module.exports = [client, server];
