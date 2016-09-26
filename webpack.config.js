var webpack = require('webpack');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {

  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    './src/entry.js'
  ],

  output: {
    path: './build',
    filename: '[name].js'
  },

  module: {
    loaders: [
      { test: /\.less$/, loader: 'style!css!less' },
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },

  plugins: [
    new OpenBrowserPlugin({ url: 'http://localhost:8080' }),
  ]
}
