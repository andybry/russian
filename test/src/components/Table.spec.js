import Table from '../../../src/components/Table'
import expect from 'expect'
import { shallow } from 'enzyme'
import React from 'react'

const setup = () => {
  const rows = [
    { column1: 'cell11', column2: 'cell12' },
    { column1: 'cell21', column2: 'cell22' },
    { column1: 'cell31', column2: 'cell32' }
  ]
  const columnNames = ['column1', 'column2']
  const startIndex = 100
  const props = { rows, columnNames, startIndex }
  const component = shallow(<Table {...props} />)
  return {
    headers: component.find('th').map(el => el.text()),
    cells: component.find('td').map(el => el.text())
  }
}

describe('src/components/Table', () => {
  it('should display column headers', () => {
    const { headers } = setup()
    expect(headers).toEqual(['Position', 'column1', 'column2'])
  })

  it('should display cells', () => {
    const { cells } = setup()
    expect(cells).toEqual([
      '101', 'cell11', 'cell12',
      '102', 'cell21', 'cell22',
      '103', 'cell31', 'cell32'
    ])
  })
})
