import React from 'react'
import ReactDOM from 'react-dom'
import Root from './containers/Root'
import lemmas from '../data/lemma.csv'
import wordForms from '../data/words.csv'
import configureStore from './store/configureStore'

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
    <Component store={store} />,
    rootElement
  )
}
render(Root)

if(module.hot) {
  module.hot.accept('./containers/Root', () => {
    try {
      render(require('./containers/Root').default)
    } catch(e) {
      console.log(e)
    }
  })
}