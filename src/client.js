import React from 'react'
import ReactDOM from 'react-dom'
import Root from './containers/Root'

const lemmas = require('../data/lemma.csv')
const wordForms = require('../data/words.csv')

const rootElement = document.createElement('div')
document.body.insertBefore(rootElement, document.body.children[0])

const render = Component => {
  ReactDOM.render(
    <Component />,
    rootElement
  )
}
render(Root)

if(module.hot) {
  module.hot.accept('./containers/Root', () => {
    render(require('./containers/Root').default)
  })
}