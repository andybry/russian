import { combineReducers } from 'redux'
import pagination from 'pagination'

const lemmas = (state = [], action) => state
const wordForms = (state = [], action) => state

export default combineReducers({
  lemmas,
  wordForms,
  pagination
})