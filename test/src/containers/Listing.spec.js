import ListingContainer from '../../../src/containers/Listing'
import expect from 'expect'
import { mount } from 'enzyme'
import React from 'react'
import configureStore from '../../../src/store/configureStore'
import { Provider } from 'react-redux'
import ListingComponent from '../../../src/components/Listing'

const setup = (pageNumber) => {
  const store = configureStore({
    lemmas: [
      { lemma: 'lemma1', part: 'part1' },
      { lemma: 'lemma2', part: 'part2' },
      { lemma: 'lemma3', part: 'part3' },
      { lemma: 'lemma4', part: 'part4' },
      { lemma: 'lemma5', part: 'part5' },
      { lemma: 'lemma6', part: 'part6' }
    ]
  })
  const component = mount(
    <Provider store={store}>
      <ListingContainer
        pageNumber={pageNumber}
        pageSize={2}
        stateKey="lemmas"
        urlFunction={(num) => `/url/${num}`}
      />
    </Provider>
  )
  return component.find(ListingComponent).props()
}

describe('src/containers/Listing', () => {
  it('should correctly calculate the rows', () => {
    const { rows } = setup(2)
    expect(rows).toEqual([
      { lemma: 'lemma3', part: 'part3' },
      { lemma: 'lemma4', part: 'part4' }
    ])
  })

  it('should correctly calculate the start index', () => {
    const { startIndex } = setup(3)
    expect(startIndex).toEqual(4)
  })

  it('should correctly calculate the column names', () => {
    const { columnNames } = setup(3)
    expect(columnNames).toEqual(['lemma', 'part'])
  })

  it('should correctly calculate the pagination', () => {
    const { pages } = setup(2)
    expect(pages).toEqual({
      size: 2,
      current: 2,
      total: 3
    })
  })

  it('should pass on the urlFunction', () => {
    const { urlFunction } = setup(2)
    expect(urlFunction(7)).toEqual('/url/7')
  })
})
