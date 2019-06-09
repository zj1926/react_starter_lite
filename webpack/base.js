
module.exports = {
  resolve: {
    extensions: ['.js'],
  },
  entry: [
    '@babel/polyfill',
    './src/index.js',
  ],
  fileModules: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        }],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          'sass-loader',
        ],
      },
    ]
  },
};
