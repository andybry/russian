import React, { PropTypes } from 'react'
import Table from '../components/Table'
import { connect } from 'react-redux'
import { Link } from 'react-router'

const Listing = ({
  rows, columnNames, startIndex, pages, urlFunction
}) => (
  <div>
    <Table { ...{ rows, columnNames, startIndex } } />
    <Link to={urlFunction(pages.current - 1)}>Back</Link>
    <span>{ pages.current } / { pages.total }</span>
    <Link to={urlFunction(pages.current + 1)}>Forward</Link>
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

export default connect(mapStateToProps)(Listing)
