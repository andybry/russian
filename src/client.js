import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import lemmas from '../data/lemma.csv'
import wordForms from '../data/words.csv'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'

const store = configureStore({
  lemmas,
  wordForms,
  pagination: {
    current: 1,
    size: 15,
    total: Math.ceil(lemmas.length / 15)
  }
})

const rootElement = document.createElement('div')
document.body.insertBefore(rootElement, document.body.children[0])

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <Component store={store} />
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
      console.log(e)
    }
  })
}
