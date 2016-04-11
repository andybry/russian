import frequencyData from '../../data/frequency'
import configureStore from '../store/configureStore'
import React from 'react'
import { Provider } from 'react-redux'
import routes from '../routes'
import { match, RouterContext } from 'react-router'
import { renderToString } from 'react-dom/server'

const template = (content) => (
`<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="/style.css">
    <title>Russian Words</title>
  </head>
  <body>
    <div id="root">${content}</div>
    <div id="debug"></div>
    <script src="/bundle.js"></script>
  </body>
</html>
`)

export default (req, res) => {
  const store = configureStore(frequencyData)
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      const app = renderToString(
        <Provider store={store}>
          <RouterContext {...renderProps} />
        </Provider>
      )
      const page = template(app)
      res.status(200).send(page)
    } else {
      res.status(404).send('Not found')
    }
  })
}
