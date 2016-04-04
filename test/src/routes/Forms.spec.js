import Forms from '../../../src/routes/Forms'
import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'
import Listing from '../../../src/containers/Listing'

const setup = () => {
  const component = shallow(<Forms params={{ pageNumber: '5' }} />)
  const listing = component.find(Listing)
  return listing.props()
}

describe('src/routes/Forms', () => {
  it('should show the listing for word forms', () => {
    const { stateKey } = setup()
    expect(stateKey).toEqual('wordForms')
  })

  it('should show the listing for the correct page', () => {
    const { pageNumber } = setup()
    expect(pageNumber).toEqual('5')
  })

  it('should show the correct urls', () => {
    const { urlFunction } = setup()
    expect(urlFunction(2)).toEqual('/forms/2')
  })
})
