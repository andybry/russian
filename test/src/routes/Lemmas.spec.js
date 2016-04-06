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

  it('should add the correct transformation for part', () => {
    const { transform } = setup()
    const input = { lemma: 'lemma1', part: 'part1' }
    expect(transform(input).part.props.to).toEqual('/lemmas/part1/p1')
  })

  it('should add the correct transformation for lemma', () => {
    const { transform } = setup()
    const input = { lemma: 'lemma1', part: 'part1' }
    expect(transform(input).lemma.props.to).toEqual('/lemmas/lemma1')
  })
})
