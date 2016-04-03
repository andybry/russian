import App from '../../../src/containers/App'
import expect from 'expect'
import { mount } from 'enzyme'
import React from 'react'
import Table from '../../../src/components/Table'
import configureStore from '../../../src/store/configureStore'
import { Provider } from 'react-redux'

const setup = (current = 1) => {
  const store = configureStore({
    lemmas: [
      { lemma: 'lemma1', part: 'part1' },
      { lemma: 'lemma2', part: 'part2' },
      { lemma: 'lemma3', part: 'part3' },
      { lemma: 'lemma4', part: 'part4' },
      { lemma: 'lemma5', part: 'part5' },
      { lemma: 'lemma6', part: 'part6' }
    ],
    wordForms: [],
    pagination: {
      current,
      size: 2,
      total: 3
    }
  })
  const component = mount(
    <Provider store={store}>
      <App />
    </Provider>
  )
  return {
    table: component.find(Table),
    pageOfTotal: component.find('span').text(),
    back: component.find('button').at(0),
    forward: component.find('button').at(1)
  }
}

describe('src/containers/App', () => {
  it('should show the table', () => {
    const { table } = setup()
    expect(table.props()).toEqual({
      rows: [
        { lemma: 'lemma1', part: 'part1' },
        { lemma: 'lemma2', part: 'part2' }
      ],
      columnNames: ['lemma', 'part'],
      startIndex: 0
    })
  })

  it('should indicate the current page', () => {
    const { pageOfTotal } = setup(2)
    expect(pageOfTotal).toEqual('2 / 3')
  })

  it('should show the next page when forward is clicked', () => {
    const { table, forward } = setup(1)
    forward.simulate('click')
    expect(table.props()).toEqual({
      rows: [
        { lemma: 'lemma3', part: 'part3' },
        { lemma: 'lemma4', part: 'part4' }
      ],
      columnNames: ['lemma', 'part'],
      startIndex: 2
    })
  })

  it('should show the previous page when back is clicked', () => {
    const { table, back } = setup(3)
    back.simulate('click')
    expect(table.props()).toEqual({
      rows: [
        { lemma: 'lemma3', part: 'part3' },
        { lemma: 'lemma4', part: 'part4' }
      ],
      columnNames: ['lemma', 'part'],
      startIndex: 2
    })
  })
})
