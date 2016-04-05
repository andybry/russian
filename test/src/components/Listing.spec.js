import Listing from '../../../src/components/Listing'
import expect from 'expect'
import { shallow } from 'enzyme'
import React from 'react'
import Table from '../../../src/components/Table'
import Pagination from '../../../src/components/Pagination'

const setup = () => {
  const props = {
    tableProps: {
      rows: [{ column1: 'cell11', column2: 'cell12' }],
      columnNames: ['column1', 'column2'],
      startIndex: 2
    },
    paginationProps: {
      current: 3,
      total: 5,
      urlFunction: (num) => `/url/${num}`
    }
  }
  const component = shallow(<Listing {...props} />)
  return {
    props,
    table: component.find(Table),
    pagination: component.find(Pagination)
  }
}

describe('src/components/Listing', () => {
  it('should show the table', () => {
    const { table, props } = setup()
    expect(table.props()).toEqual(props.tableProps)
  })

  it('should show the pagination', () => {
    const { pagination, props } = setup()
    expect(pagination.props()).toEqual(props.paginationProps)
  })
})
