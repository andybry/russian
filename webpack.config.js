const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')

const base = {
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
      { test: /\.csv$/, loader: 'dsv' },
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
    ]
  },
  postcss: () => [
    require('postcss-cssnext')
  ]
}

if (process.env.NODE_ENV === 'production') {
  module.exports = merge(base, require('./config/webpack/prod.config'))
} else {
  module.exports = merge(base, require('./config/webpack/dev.config'))
}
