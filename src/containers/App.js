import React from 'react'
import { connect } from 'react-redux'
import Table from '../components/Table'
import { pageBack, pageForward } from '../actions/pagination'

const App = ({ 
  rows, columnNames, startIndex, pagination, pageBack, pageForward 
}) => (
  <div>
    <Table {...{rows, columnNames, startIndex }} />
    <button onClick={pageBack}>Back</button>
    <span>{ pagination.current } / { pagination.total }</span>
    <button onClick={pageForward}>Forward</button>
  </div>
)

const mapStateToProps = (state) => {
  const pagination = state.pagination
  const startIndex = pagination.size * (pagination.current - 1)
  const endIndex = startIndex + pagination.size
  const rows = state.lemmas.slice(startIndex, endIndex)
  const columnNames = Object.keys(rows[0])
  return { rows, startIndex, columnNames, pagination }
}

const mapDispatchToProps = {
  pageBack,
  pageForward
}
  
export default connect(mapStateToProps, mapDispatchToProps)(App)
