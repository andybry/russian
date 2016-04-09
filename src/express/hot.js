export const addHotMiddleware = app => {
  if (process.env.NODE_ENV === 'production') return
  const webpack = require('webpack')
  const config = require('../../webpack.config')
  const compiler = webpack(config)
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  app.use((req, res, next) => {
    if (req.path !== '/style.css') return next()
    res.set('Content-Type', 'text/css')
    return res.send('')
  })
  app.use(webpackDevMiddleware(compiler, { noInfo: true }))
  app.use(webpackHotMiddleware(compiler))
}

export function uncacheModulesIn(dir, onUncache) {
  const cache = require.cache
  const cacheKeys = Object.keys(cache)
  const uncacheKeys = cacheKeys.filter(key => key.startsWith(dir))
  uncacheKeys.forEach(key => delete cache[key])
  try {
    onUncache()
    // eslint-disable-next-line no-console
    console.log(`modules in ${dir} reloaded`)
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('problem reloading modules in ${dir}: ')
    // eslint-disable-next-line no-console
    console.log(e)
  }
}

export function hotReloadIn(dir, onReload) {
  if (process.env.NODE_ENV === 'production') return
  const chokidar = require('chokidar')
  const watcher = chokidar.watch(dir)
  watcher.on('change', (module) => {
    // eslint-disable-next-line no-console
    console.log(`change in ${module} triggered server reload: `)
    uncacheModulesIn(dir, onReload)
  })
}
