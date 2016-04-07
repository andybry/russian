import * as actionTypes from '../constants/actionTypes'

const record = (state = {}, action) => {
  const { name, value } = action
  switch (action.type) {
    case actionTypes.RECORD_CHANGED:
      return { ...state, [name]: value }
    default:
      return state
  }
}

const records = (state = {}, action) => {
  const { lemma } = action
  switch (action.type) {
    case actionTypes.RECORD_CHANGED:
      return { ...state, [lemma]: record(state[lemma], action) }
    default:
      return state
  }
}

export default records
