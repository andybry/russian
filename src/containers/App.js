import React from 'react'
import { connect } from 'react-redux'
import Table from '../components/Table'

const App = ({ rows, columnNames }) => (
  <Table {...{rows, columnNames}} />
)

const mapStateToProps = (state) => {
    const rows = state.lemmas.slice(0, 10)
    const columnNames = Object.keys(rows[0])
    return { rows, columnNames }
  }
  
export default connect(mapStateToProps)(App)
