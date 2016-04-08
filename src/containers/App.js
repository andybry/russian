import React, { PropTypes } from 'react'
import { Router } from 'react-router'
import routes from '../routes'
import DevTools from '../containers/DevTools'

const renderDevTools = () => {
  if (process.env.NODE_ENV === 'production') return null
  return <DevTools />
}

const App = ({ history }) => (
  <div>
    {renderDevTools()}
    <Router history={history} routes={routes} />
  </div>
)
App.propTypes = {
  history: PropTypes.object.isRequired
}
export default App
