import records from '../../../src/reducers/records'
import * as actionTypes from '../../../src/constants/actionTypes'
import deepFreeze from 'deep-freeze'
import expect from 'expect'

describe('src/reducers/records', () => {
  it('should add a new record on RECORD_CHANGED', () => {
    const state = {}
    const action = {
      type: actionTypes.RECORD_CHANGED,
      lemma: 'lemma1',
      name: 'key',
      value: 'value'
    }
    const expected = {
      lemma1: {
        key: 'value'
      }
    }
    deepFreeze(state)
    deepFreeze(action)
    expect(records(state, action)).toEqual(expected)
  })

  it('should update an existing record on RECORD_CHANGED', () => {
    const state = {
      lemma1: {
        key: 'oldValue'
      }
    }
    const action = {
      type: actionTypes.RECORD_CHANGED,
      lemma: 'lemma1',
      name: 'key',
      value: 'value'
    }
    const expected = {
      lemma1: {
        key: 'value'
      }
    }
    deepFreeze(state)
    deepFreeze(action)
    expect(records(state, action)).toEqual(expected)
  })
})
