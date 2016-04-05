import React, { PropTypes } from 'react'
import Listing from '../containers/Listing'
import { lemmasWithPart } from './urls'

const LemmasWithPart = ({ params }) => (
  <Listing
    pageNumber={params.pageNumber}
    urlFunction={num => lemmasWithPart(params.part, num)}
    stateKey="lemmas"
    filter={lemma => lemma.part === params.part }
  />
)
LemmasWithPart.propTypes = {
  params: PropTypes.shape({
    pageNumber: PropTypes.string.isRequired,
    part: PropTypes.string.isRequired
  }).isRequired
}
export default LemmasWithPart
