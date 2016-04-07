import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import save from '../middleware/save'

export default function configureStore(initialState) {
  const middleware = [save]
  if (process.env.NODE_ENV !== 'production') {
    const createLogger = require('redux-logger')
    middleware.unshift(createLogger())
  }
  const store = createStore(
    rootReducer, initialState, applyMiddleware(...middleware)
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
