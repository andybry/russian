import React, { PropTypes } from 'react'
import Listing from '../containers/Listing'
import { lemmas, lemmasWithPart } from './urls'
import { Link } from 'react-router'

const Lemmas = ({ params }) => (
  <Listing
    pageNumber={params.pageNumber}
    urlFunction={lemmas}
    stateKey="lemmas"
    transform={lemma => ({
      lemma: lemma.lemma,
      part: <Link to={lemmasWithPart(lemma.part, 1)}>{lemma.part}</Link>
    })}
  />
)
Lemmas.propTypes = {
  params: PropTypes.shape({
    pageNumber: PropTypes.string.isRequired
  }).isRequired
}
export default Lemmas
