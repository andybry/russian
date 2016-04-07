import save from '../../../src/middleware/save'
import expect from 'expect'
import * as actionTypes from '../../../src/constants/actionTypes'

const setup = (type) => {
  let records = {}
  const store = {
    getState: () => ({ records })
  }
  const action = { type }
  const next = () => {
    records = { key: 'value' }
    return 'next action'
  }
  return { store, next, action }
}

describe('src/middleware/save', () => {
  beforeEach(() => {
    global.localStorage = {}
  })

  it('should return next action for default cases', () => {
    const { store, next, action } = setup('default')
    expect(save(store)(next)(action)).toEqual('next action')
  })

  it('should return next action for RECORD_CHANGED', () => {
    const { store, next, action } = setup(actionTypes.RECORD_CHANGED)
    expect(save(store)(next)(action)).toEqual('next action')
  })

  it('should save records to localStorage for RECORD_CHANGED', () => {
    const { store, next, action } = setup(actionTypes.RECORD_CHANGED)
    save(store)(next)(action)
    expect(localStorage.records).toEqual('{"key":"value"}')
  })

  afterEach(() => {
    delete global.localStorage
  })
})
