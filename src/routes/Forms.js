import React, { PropTypes } from 'react'
import Listing from '../containers/Listing'
import { forms } from './urls'

const Forms = ({ params }) => (
  <Listing pageNumber={params.pageNumber} urlFunction={forms} stateKey="wordForms" />
)
Forms.propTypes = {
  params: PropTypes.shape({
    pageNumber: PropTypes.string.isRequired
  }).isRequired
}
export default Forms
