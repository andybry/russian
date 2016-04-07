import * as actionTypes from '../constants/actionTypes'

export default store => next => action => {
  const newAction = next(action)
  const state = store.getState()
  switch (action.type) {
    case actionTypes.RECORD_CHANGED:
      localStorage.records = JSON.stringify(state.records)
      return newAction
    default:
      return newAction
  }
}
