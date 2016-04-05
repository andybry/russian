import Listing from '../../../src/components/Listing'
import expect from 'expect'
import { shallow } from 'enzyme'
import React from 'react'
import Table from '../../../src/components/Table'

const setup = (current) => {
  const props = {
    rows: [{ column1: 'cell11', column2: 'cell12' }],
    columnNames: ['column1', 'column2'],
    startIndex: current - 1,
    pages: {
      current,
      total: 5
    },
    urlFunction: (num) => `/url/${num}`
  }
  const component = shallow(<Listing {...props} />)
  return {
    table: component.find(Table),
    back: component.findWhere(el => el.props().children === 'Back'),
    forward: component.findWhere(el => el.props().children === 'Forward')
  }
}

describe('src/components/Listing', () => {
  it('should show the table', () => {
    const { table } = setup(3)
    expect(table.props()).toEqual({
      rows: [{ column1: 'cell11', column2: 'cell12' }],
      columnNames: ['column1', 'column2'],
      startIndex: 2
    })
  })

  it('should show the correct back link', () => {
    const { back } = setup(3)
    expect(back.props().to).toEqual('/url/2')
  })

  it('should show not show back on page 1', () => {
    const { back } = setup(1)
    expect(back.length).toEqual(0)
  })

  it('should show the correct forward link', () => {
    const { forward } = setup(3)
    expect(forward.props().to).toEqual('/url/4')
  })

  it('should show not show forward on last page', () => {
    const { forward } = setup(5)
    expect(forward.length).toEqual(0)
  })
})
