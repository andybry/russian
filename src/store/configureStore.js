import { createStore } from 'redux'
import rootReducer from '../reducers'

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState)

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
