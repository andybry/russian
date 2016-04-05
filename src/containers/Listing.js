import { PropTypes } from 'react'
import Listing from '../components/Listing'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
  const { pageSize = 15, pageNumber, urlFunction, stateKey } = ownProps
  const records = state[stateKey]
  const currentPage = parseInt(pageNumber, 10)
  const totalPages = Math.ceil(records.length / pageSize)
  const startIndex = pageSize * (currentPage - 1)
  const endIndex = startIndex + pageSize
  const rows = records.slice(startIndex, endIndex)
  const columnNames = Object.keys(rows[0])
  const tableProps = {
    rows,
    startIndex,
    columnNames
  }
  const paginationProps = {
    urlFunction,
    total: totalPages,
    current: currentPage
  }
  return { tableProps, paginationProps }
}

const ListingContainer = connect(mapStateToProps)(Listing)

ListingContainer.propTypes = {
  pageSize: PropTypes.number,
  pageNumber: PropTypes.string.isRequired,
  urlFunction: PropTypes.func.isRequired,
  stateKey: PropTypes.string.isRequired
}

export default ListingContainer
