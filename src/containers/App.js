import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Table from '../components/Table'
import * as paginationActions from '../actions/pagination'

const App = ({
  rows, columnNames, startIndex, pagination, pageBack, pageForward
}) => (
  <div>
    <Table { ...{ rows, columnNames, startIndex } } />
    <button onClick={pageBack}>Back</button>
    <span>{ pagination.current } / { pagination.total }</span>
    <button onClick={pageForward}>Forward</button>
  </div>
)

App.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
  columnNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  startIndex: PropTypes.number.isRequired,
  pagination: PropTypes.shape({
    current: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
  }).isRequired,
  pageBack: PropTypes.func.isRequired,
  pageForward: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  const pagination = state.pagination
  const startIndex = pagination.size * (pagination.current - 1)
  const endIndex = startIndex + pagination.size
  const rows = state.lemmas.slice(startIndex, endIndex)
  const columnNames = Object.keys(rows[0])
  return { rows, startIndex, columnNames, pagination }
}

export default connect(mapStateToProps, paginationActions)(App)
