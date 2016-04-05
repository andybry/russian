import ListingContainer from '../../../src/containers/Listing'
import expect from 'expect'
import { mount } from 'enzyme'
import React from 'react'
import configureStore from '../../../src/store/configureStore'
import { Provider } from 'react-redux'
import ListingComponent from '../../../src/components/Listing'

const setup = () => {
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
  const ownProps = {
    pageNumber: '2',
    pageSize: 2,
    stateKey: 'lemmas',
    urlFunction: num => `/url/${num}`
  }
  const component = mount(
    <Provider store={store}>
      <ListingContainer {...ownProps} />
    </Provider>
  )
  const listingComponent = component.find(ListingComponent)
  return {
    ownProps,
    ...listingComponent.props()
  }
}

describe('src/containers/Listing', () => {
  it('should correctly calculate tableProps', () => {
    const { tableProps } = setup()
    expect(tableProps).toEqual({
      rows: [
        { lemma: 'lemma3', part: 'part3' },
        { lemma: 'lemma4', part: 'part4' }
      ],
      startIndex: 2,
      columnNames: ['lemma', 'part']
    })
  })

  it('should correctly calculate the paginationProps', () => {
    const { paginationProps, ownProps } = setup()
    const { urlFunction } = ownProps
    expect(paginationProps).toEqual({
      current: 2,
      total: 3,
      urlFunction
    })
  })
})
