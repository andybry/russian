import React, { PropTypes } from 'react'
import Listing from '../containers/Listing'
import * as urls from './urls'
import { Link } from 'react-router'

const LemmasWithPart = ({ params }) => (
  <Listing
    pageNumber={params.pageNumber}
    urlFunction={num => urls.lemmasWithPart(params.part, num)}
    stateKey="lemmas"
    filter={lemma => lemma.part === params.part }
    transform={lemma => ({
      lemma: <Link to={urls.lemma(lemma.lemma)}>{lemma.lemma}</Link>,
      part: lemma.part
    })}
  />
)
LemmasWithPart.propTypes = {
  params: PropTypes.shape({
    pageNumber: PropTypes.string.isRequired,
    part: PropTypes.string.isRequired
  }).isRequired
}
export default LemmasWithPart
