import Lemma from '../../../src/routes/Lemma'
import React from 'react'
import { shallow } from 'enzyme'
import Record from '../../../src/containers/Record'
import expect from 'expect'

const setup = () => {
  const lemma = 'lemma1'
  const params = { lemma }
  const component = shallow(<Lemma params={params} />)
  const record = component.find(Record)
  return record.props()
}

describe('src/routes/Lemma', () => {
  it('should show the record with given lemma', () => {
    const { lemma } = setup()
    expect(lemma).toEqual('lemma1')
  })
})
