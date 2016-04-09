const webpack = require('webpack')
module.exports = {
  entry: ['webpack-hot-middleware/client'],
  debug: 'true',
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin
  ],
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css?sourceMap!postcss' }
    ]
  }
}
