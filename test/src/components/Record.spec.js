import Record from '../../../src/components/Record'
import { shallow } from 'enzyme'
import React from 'react'
import expect from 'expect'

const setup = () => {
  const props = {
    lemma: 'lemma',
    position: 5,
    part: 'part',
    record: {
      meaning: 'meaning'
    },
    onChange: expect.createSpy()
  }
  const component = shallow(<Record {...props} />)
  return {
    lemma: component.find('h1').text(),
    position: component.find('dd').at(0).text(),
    part: component.find('dd').at(1).text(),
    meaning: component.find('#meaning'),
    onChange: props.onChange
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

  it('should show the meaning', () => {
    const { meaning } = setup()
    expect(meaning.props().value).toEqual('meaning')
  })

  it('should call onChange when the meaning changes', () => {
    const { meaning, onChange } = setup()
    const e = {}
    meaning.simulate('change', e)
    expect(onChange).toHaveBeenCalledWith(e)
  })
})
