import React from 'react'
import Table from '../components/Table'

const lemmas = require('../../data/lemma.csv')
const wordForms = require('../../data/words.csv')

const rows = lemmas.slice(0, 10)
const keys = Object.keys(rows[0])

export default () => (
  <Table {...{rows, keys}} />
)