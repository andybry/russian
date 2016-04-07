import './style.css'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

const startApp = frequencyData => {
  let records = []
  if (localStorage.records) {
    records = JSON.parse(localStorage.records)
  }
  const store = configureStore({ ...frequencyData, records })
  const history = syncHistoryWithStore(browserHistory, store)

  const rootElement = document.createElement('div')
  document.body.insertBefore(rootElement, document.body.children[0])

  const render = Component => {
    ReactDOM.render(
      <Provider store={store}>
        <Component history={history} />
      </Provider>,
      rootElement
    )
  }
  render(App)

  if (module.hot) {
    module.hot.accept('./containers/App', () => {
      try {
        render(require('./containers/App').default)
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e)
      }
    })
  }
}

if (localStorage.frequencyData) {
  const frequencyData = JSON.parse(localStorage.frequencyData)
  startApp(frequencyData)
} else {
  require.ensure(['../data/lemma.csv', '../data/words.csv'], (require) => {
    const lemmas = require('../data/lemma.csv')
    const wordForms = require('../data/words.csv')
    const frequencyData = { lemmas, wordForms }
    localStorage.frequencyData = JSON.stringify(frequencyData)
    startApp(frequencyData)
  })
}

