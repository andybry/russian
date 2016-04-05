import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const renderBack = (urlFunction, current) => {
  if (current === 1) return null
  return <Link to={urlFunction(current - 1)}>Back</Link>
}

const renderForward = (urlFunction, current, total) => {
  if (current === total) return null
  return <Link to={urlFunction(current + 1)}>Forward</Link>
}

const Pagination = ({ urlFunction, current, total }) => (
  <div>
    {renderBack(urlFunction, current)}
    <span>{ current } / { total }</span>
    {renderForward(urlFunction, current, total)}
  </div>
)

Pagination.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  urlFunction: PropTypes.func.isRequired
}

export default Pagination
