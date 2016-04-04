import React, { PropTypes } from 'react'
import Listing from '../containers/Listing'
import { lemmas } from './urls'

const Lemmas = ({ params }) => (
  <Listing pageNumber={params.pageNumber} urlFunction={lemmas} stateKey="lemmas" />
)
Lemmas.propTypes = {
  params: PropTypes.shape({
    pageNumber: PropTypes.string.isRequired
  }).isRequired
}
export default Lemmas
