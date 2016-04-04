import React, { PropTypes } from 'react'
import Table from '../components/Table'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import * as urls from '../routes/urls'

const Lemmas = ({
  rows, columnNames, startIndex, pages
}) => (
  <div>
    <Table { ...{ rows, columnNames, startIndex } } />
    <Link to={urls.lemmas(pages.current - 1)}>Back</Link>
    <span>{ pages.current } / { pages.total }</span>
    <Link to={urls.lemmas(pages.current + 1)}>Forward</Link>
  </div>
)

Lemmas.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
  columnNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  startIndex: PropTypes.number.isRequired,
  pages: PropTypes.shape({
    current: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
  }).isRequired
}

const mapStateToProps = (state, ownProps) => {
  const { pageSize = 15, params: { pageNumber } } = ownProps
  const { lemmas } = state
  const pages = {
    size: pageSize,
    current: parseInt(pageNumber, 10),
    total: Math.ceil(lemmas.length / pageSize)
  }
  const startIndex = pages.size * (pages.current - 1)
  const endIndex = startIndex + pages.size
  const rows = lemmas.slice(startIndex, endIndex)
  const columnNames = Object.keys(rows[0])
  return { rows, startIndex, columnNames, pages }
}

export default connect(mapStateToProps)(Lemmas)
