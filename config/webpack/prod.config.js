const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.optimize.OccurenceOrderPlugin,
    new webpack.optimize.UglifyJsPlugin,
    new webpack.optimize.DedupePlugin,
    new ExtractTextPlugin('style.css')
  ],
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css', 'postcss')
      }
    ]
  }
}
