import { combineReducers } from 'redux'
import pagination from './pagination'

// eslint-disable-next-line no-unused-vars
const lemmas = (state = [], action) => state
// eslint-disable-next-line no-unused-vars
const wordForms = (state = [], action) => state

export default combineReducers({
  lemmas,
  wordForms,
  pagination
})
