import React, { PropTypes } from 'react'
import Table from './Table'
import Pagination from './Pagination'

const Listing = ({
  tableProps, paginationProps
}) => (
  <div>
    <Table {...tableProps} />
    <Pagination {...paginationProps} />
  </div>
)

Listing.propTypes = {
  tableProps: PropTypes.shape({
    rows: PropTypes.arrayOf(PropTypes.object).isRequired,
    columnNames: PropTypes.arrayOf(PropTypes.string).isRequired,
    startIndex: PropTypes.number.isRequired
  }),
  paginationProps: PropTypes.shape({
    current: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    urlFunction: PropTypes.func.isRequired
  })
}

export default Listing
