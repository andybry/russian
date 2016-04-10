import React, { PropTypes } from 'react'
import { Router } from 'react-router'
import routes from '../routes'

const App = ({ history }) => (
  <Router history={history} routes={routes} />
)
App.propTypes = {
  history: PropTypes.object.isRequired
}
export default App
