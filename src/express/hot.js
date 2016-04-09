export const addHotMiddleware = app => {
  if (process.env.NODE_ENV === 'production') return
  const webpack = require('webpack')
  const config = require('../../webpack.config')
  const compiler = webpack(config)
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  app.use((req, res, next) => { // history api fallback
    if (req.path.match(/hot-update\.js(on)?$/)) return next()
    switch (req.path) {
      case '/__webpack_hmr':
        return next()
      case '/bundle.js':
        return next()
      case '/style.css':
        res.set('Content-Type', 'text/css')
        return res.send('')
      default:
        // eslint-disable-next-line no-param-reassign
        req.url = '/'
        return next()
    }
  })
  app.use(webpackDevMiddleware(compiler, { noInfo: true }))
  app.use(webpackHotMiddleware(compiler))
}
