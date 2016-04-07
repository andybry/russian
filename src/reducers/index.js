import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import records from './records'

// eslint-disable-next-line no-unused-vars
const lemmas = (state = [], action) => state
// eslint-disable-next-line no-unused-vars
const wordForms = (state = [], action) => state

export default combineReducers({
  lemmas,
  wordForms,
  routing,
  records
})
