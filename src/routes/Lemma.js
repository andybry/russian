import React, { PropTypes } from 'react'
import Record from '../containers/Record'

const Lemma = ({ params }) => <Record lemma={params.lemma} />
Lemma.propTypes = {
  params: PropTypes.shape({
    lemma: PropTypes.string.isRequired
  }).isRequired
}
export default Lemma
