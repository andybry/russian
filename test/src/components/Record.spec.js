import Record from '../../../src/components/Record'
import { shallow } from 'enzyme'
import React from 'react'
import expect from 'expect'

const setup = () => {
  const props = {
    lemma: 'lemma',
    position: 5,
    part: 'part'
  }
  const component = shallow(<Record {...props} />)
  return {
    lemma: component.find('h1').text(),
    position: component.find('dd').at(0).text(),
    part: component.find('dd').at(1).text()
  }
}

describe('src/components/Record', () => {
  it('should show the lemma', () => {
    const { lemma } = setup()
    expect(lemma).toEqual('lemma')
  })

  it('should show the position', () => {
    const { position } = setup()
    expect(position).toEqual('5')
  })

  it('should show the part', () => {
    const { part } = setup()
    expect(part).toEqual('part')
  })
})
