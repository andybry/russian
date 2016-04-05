import Pagination from '../../../src/components/Pagination'
import React from 'react'
import { shallow } from 'enzyme'
import expect from 'expect'

const setup = (current) => {
  const props = {
    current,
    total: 5,
    urlFunction: num => `/url/${num}`
  }
  const component = shallow(<Pagination {...props} />)
  return {
    details: component.find('span').text(),
    back: component.findWhere(el =>
      (el.props().children === 'Back')
    ),
    forward: component.findWhere(el =>
      (el.props().children === 'Forward')
    )
  }
}

describe('src/component/Pagination', () => {
  it('should show the page details', () => {
    const { details } = setup(2)
    expect(details).toEqual('2 / 5')
  })

  it('should show correct back link', () => {
    const { back } = setup(2)
    expect(back.props().to).toEqual('/url/1')
  })

  it('should not show back on first page', () => {
    const { back } = setup(1)
    expect(back.length).toEqual(0)
  })

  it('should show correct forward link', () => {
    const { forward } = setup(1)
    expect(forward.props().to).toEqual('/url/2')
  })

  it('should not show forward on last page', () => {
    const { forward } = setup(5)
    expect(forward.length).toEqual(0)
  })
})
