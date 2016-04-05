import RecordContainer from '../../../src/containers/Record'
import RecordComponent from '../../../src/components/Record'
import React from 'react'
import configureStore from '../../../src/store/configureStore'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import expect from 'expect'

const setup = (lemma) => {
  const store = configureStore({
    lemmas: [
      { lemma: 'lemma1', part: 'part1' },
      { lemma: 'lemma2', part: 'part2' },
      { lemma: 'lemma3', part: 'part3' },
      { lemma: 'lemma4', part: 'part4' },
      { lemma: 'lemma5', part: 'part5' }
    ]
  })
  const component = mount(
    <Provider store={store}>
      <RecordContainer lemma={lemma} />
    </Provider>
  )
  return component.find(RecordComponent).props()
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
})
