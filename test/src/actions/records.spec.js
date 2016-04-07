import * as actions from '../../../src/actions/records'
import * as actionTypes from '../../../src/constants/actionTypes'
import expect from 'expect'

describe('src/actions/records', () => {
  describe('recordChanged', () => {
    it('should return a RECORD_CHANGED action', () => {
      expect(actions.recordChanged('lemma', 'name', 'value'))
        .toEqual({
          type: actionTypes.RECORD_CHANGED,
          lemma: 'lemma',
          name: 'name',
          value: 'value'
        })
    })
  })
})
