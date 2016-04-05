import { PropTypes } from 'react'
import Listing from '../components/Listing'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
  const { pageSize = 15, pageNumber, urlFunction, stateKey } = ownProps
  const records = state[stateKey]
  const pages = {
    size: pageSize,
    current: parseInt(pageNumber, 10),
    total: Math.ceil(records.length / pageSize)
  }
  const startIndex = pages.size * (pages.current - 1)
  const endIndex = startIndex + pages.size
  const rows = records.slice(startIndex, endIndex)
  const columnNames = Object.keys(rows[0])
  return { rows, startIndex, columnNames, pages, urlFunction }
}

const ListingContainer = connect(mapStateToProps)(Listing)

ListingContainer.propTypes = {
  pageSize: PropTypes.number,
  pageNumber: PropTypes.string.isRequired,
  urlFunction: PropTypes.func.isRequired,
  stateKey: PropTypes.string.isRequired
}

export default ListingContainer
