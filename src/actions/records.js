import * as actionTypes from '../constants/actionTypes'

export const recordChanged = (lemma, name, value) => ({
  type: actionTypes.RECORD_CHANGED, lemma, name, value
})
