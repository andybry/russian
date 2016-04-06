import React, { PropTypes } from 'react'
import Listing from '../containers/Listing'
import * as urls from './urls'
import { Link } from 'react-router'

const Lemmas = ({ params }) => (
  <Listing
    pageNumber={params.pageNumber}
    urlFunction={urls.lemmas}
    stateKey="lemmas"
    transform={lemma => ({
      lemma: <Link to={urls.lemma(lemma.lemma)}>{lemma.lemma}</Link>,
      part: <Link to={urls.lemmasWithPart(lemma.part, 1)}>{lemma.part}</Link>
    })}
  />
)
Lemmas.propTypes = {
  params: PropTypes.shape({
    pageNumber: PropTypes.string.isRequired
  }).isRequired
}
export default Lemmas
