import Listing from '../../../src/components/Listing'
import expect from 'expect'
import { shallow } from 'enzyme'
import React from 'react'
import Table from '../../../src/components/Table'
import Pagination from '../../../src/components/Pagination'

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
    pagination: component.find(Pagination),
    props
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

  it('should show the pagination', () => {
    const { pagination, props } = setup(3)
    const { pages, urlFunction } = props
    expect(pagination.props()).toEqual({ pages, urlFunction })
  })
})
