import React, { PropTypes } from 'react'
import Table from './Table'
import Pagination from './Pagination'

const Listing = ({
  rows, columnNames, startIndex, pages, urlFunction
}) => (
  <div>
    <Table { ...{ rows, columnNames, startIndex } } />
    <Pagination pages={pages} urlFunction={urlFunction} />
  </div>
)

Listing.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
  columnNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  startIndex: PropTypes.number.isRequired,
  pages: PropTypes.shape({
    current: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
  }).isRequired,
  urlFunction: PropTypes.func.isRequired
}

export default Listing
