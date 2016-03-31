const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/client',
  output: {
    filename: 'bundle.js',
    path: './public',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin
  ],
  module: {
    loaders: [
      { test: /\.csv$/, loader: 'dsv' }
    ]
  }
}