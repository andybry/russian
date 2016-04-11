import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'
import save from '../middleware/save'

export default function configureStore(initialState) {
  const enhancers = []
  if (process.env.NODE_ENV !== 'production') {
    const DevTools = require('../containers/DevTools').default
    enhancers.unshift(DevTools.instrument())
  }
  enhancers.unshift(applyMiddleware(save))
  const store = createStore(
    rootReducer, initialState, compose(...enhancers)
  )

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      try {
        const nextReducer = require('../reducers').default
        store.replaceReducer(nextReducer)
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e)
      }
    })
  }

  return store
}
