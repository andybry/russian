import Lemmas from '../../../src/routes/Lemmas'
import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'
import Listing from '../../../src/containers/Listing'
import * as urls from '../../../src/routes/urls'

const setup = () => {
  const component = shallow(<Lemmas params={{ pageNumber: '5' }} />)
  const listing = component.find(Listing)
  return listing.props()
}

describe('src/routes/Lemmas', () => {
  it('should show the listing for word forms', () => {
    const { stateKey } = setup()
    expect(stateKey).toEqual('lemmas')
  })

  it('should show the listing for the correct page', () => {
    const { pageNumber } = setup()
    expect(pageNumber).toEqual('5')
  })

  it('should show the correct urls', () => {
    const { urlFunction } = setup()
    expect(urlFunction(2)).toEqual(urls.lemmas(2))
  })
})