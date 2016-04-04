import Listing from '../../../src/containers/Listing'
import expect from 'expect'
import { mount } from 'enzyme'
import React from 'react'
import Table from '../../../src/components/Table'
import configureStore from '../../../src/store/configureStore'
import { Provider } from 'react-redux'
import { Link } from 'react-router'
import * as urls from '../../../src/routes/urls'

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
      <Listing
        pageNumber={pageNumber}
        pageSize={2}
        stateKey="lemmas"
        urlFunction={(num) => `/lemmas/${num}`}
      />
    </Provider>
  )
  return {
    table: component.find(Table),
    pageOfTotal: component.find('span').text(),
    back: component.find(Link).at(0),
    forward: component.find(Link).at(1)
  }
}

describe('src/containers/App', () => {
  it('should show the table', () => {
    const { table } = setup(2)
    expect(table.props()).toEqual({
      rows: [
        { lemma: 'lemma3', part: 'part3' },
        { lemma: 'lemma4', part: 'part4' }
      ],
      columnNames: ['lemma', 'part'],
      startIndex: 2
    })
  })

  it('should indicate the current page', () => {
    const { pageOfTotal } = setup(2)
    expect(pageOfTotal).toEqual('2 / 3')
  })

  it('should show the next page when forward is clicked', () => {
    const { forward } = setup(2)
    expect(forward.props().to).toEqual(urls.lemmas(3))
  })

  it('should show the previous page when back is clicked', () => {
    const { back } = setup(2)
    expect(back.props().to).toEqual(urls.lemmas(1))
  })
})
