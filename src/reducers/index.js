import { combineReducers } from 'redux'

const lemmas = (state = [], action) => state
const wordForms = (state = [], action) => state

export default combineReducers({
  lemmas,
  wordForms
})