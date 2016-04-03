import pagination from '../../../src/reducers/pagination'
import * as actionTypes from '../../../src/constants/actionTypes'
import deepFreeze from 'deep-freeze'
import expect from 'expect'

describe('src/reducers/pagination', () => {
  it('should handle PAGE_BACK', () => {
    const state = { current: 5, total: 34, size: 15 }
    const action = { type: actionTypes.PAGE_BACK }
    const expectedState = { current: 4, total: 34, size: 15 }
    deepFreeze(state)
    deepFreeze(action)
    expect(pagination(state, action)).toEqual(expectedState)
  })

  it('should handle PAGE_FORWARD', () => {
    const state = { current: 5, total: 34, size: 15 }
    const action = { type: actionTypes.PAGE_FORWARD }
    const expectedState = { current: 6, total: 34, size: 15 }
    deepFreeze(state)
    deepFreeze(action)
    expect(pagination(state, action)).toEqual(expectedState)
  })
})
