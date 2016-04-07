module.exports = {
  debug: 'true',
  devtool: 'cheap-module-eval-source-map',
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css?sourceMap!postcss' }
    ]
  }
}
