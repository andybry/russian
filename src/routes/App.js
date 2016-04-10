import React, { PropTypes } from 'react'
import DevTools from '../containers/DevTools'

const renderDevTools = () => {
  if (process.env.NODE_ENV === 'production') return null
  return <DevTools />
}

const App = ({ children }) => (
  <div>
    {renderDevTools()}
    {children}
  </div>
)
App.propTypes = {
  children: PropTypes.node.isRequired
}
export default App
