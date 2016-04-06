import LemmasWithPart from '../../../src/routes/LemmasWithPart'
import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'
import Listing from '../../../src/containers/Listing'
import * as urls from '../../../src/routes/urls'

const setup = () => {
  const component = shallow(
    <LemmasWithPart
      params={{ part: 'part', pageNumber: '5' }}
    />
  )
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
    expect(urlFunction(2)).toEqual(urls.lemmasWithPart('part', 2))
  })

  it('should add the correct filter', () => {
    const { filter } = setup()
    const input = [
      { lemma: 'lemma1', part: 'part' },
      { lemma: 'lemma2', part: 'partA' },
      { lemma: 'lemma3', part: 'partA' },
      { lemma: 'lemma4', part: 'part' },
      { lemma: 'lemma5', part: 'part' }
    ]
    expect(input.filter(filter)).toEqual([
      { lemma: 'lemma1', part: 'part' },
      { lemma: 'lemma4', part: 'part' },
      { lemma: 'lemma5', part: 'part' }
    ])
  })

  it('should add the correct transformation for part', () => {
    const { transform } = setup()
    const input = { lemma: 'lemma1', part: 'part1' }
    expect(transform(input).part).toEqual('part1')
  })

  it('should add the correct transformation for lemma', () => {
    const { transform } = setup()
    const input = { lemma: 'lemma1', part: 'part1' }
    expect(transform(input).lemma.props.to).toEqual('/lemmas/lemma1')
  })
})
