import RecordContainer from '../../../src/containers/Record'
import RecordComponent from '../../../src/components/Record'
import React from 'react'
import configureStore from '../../../src/store/configureStore'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import expect from 'expect'
import * as actions from '../../../src/actions/records'

const setup = (lemma) => {
  const store = configureStore({
    lemmas: [
      { lemma: 'lemma1', part: 'part1' },
      { lemma: 'lemma2', part: 'part2' },
      { lemma: 'lemma3', part: 'part3' },
      { lemma: 'lemma4', part: 'part4' },
      { lemma: 'lemma5', part: 'part5' }
    ],
    records: {
      lemma4: { meaning: 'meaning4' }
    }
  })
  store.dispatch = expect.createSpy()
  const component = mount(
    <Provider store={store}>
      <RecordContainer lemma={lemma} />
    </Provider>
  )
  return {
    ...component.find(RecordComponent).props(),
    dispatch: store.dispatch
  }
}

describe('src/containers/Record', () => {
  it('should calculate the correct lemma', () => {
    const { lemma } = setup('lemma4')
    expect(lemma).toEqual('lemma4')
  })

  it('should calculate the correct position', () => {
    const { position } = setup('lemma4')
    expect(position).toEqual('4')
  })

  it('should calculate the correct part of speech', () => {
    const { part } = setup('lemma4')
    expect(part).toEqual('part4')
  })

  it('should calculate the correct record', () => {
    const { record } = setup('lemma4')
    expect(record).toEqual({ meaning: 'meaning4' })
  })

  it('should dipatch RECORD_CHANGED when onChanged is called', () => {
    const { dispatch, onChange } = setup('lemma4')
    onChange({
      preventDefault() {},
      target: { name: 'key', value: 'value' }
    })
    expect(dispatch).toHaveBeenCalledWith(
      actions.recordChanged('lemma4', 'key', 'value')
    )
  })
})
