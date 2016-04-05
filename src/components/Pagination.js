import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const renderBack = (urlFunction, pages) => {
  if (pages.current === 1) return null
  return <Link to={urlFunction(pages.current - 1)}>Back</Link>
}

const renderForward = (urlFunction, pages) => {
  if (pages.current === pages.total) return null
  return <Link to={urlFunction(pages.current + 1)}>Forward</Link>
}

const Pagination = ({ urlFunction, pages }) => (
  <div>
    {renderBack(urlFunction, pages)}
    <span>{ pages.current } / { pages.total }</span>
    {renderForward(urlFunction, pages)}
  </div>
)

Pagination.propTypes = {
  pages: PropTypes.shape({
    current: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
  }).isRequired,
  urlFunction: PropTypes.func.isRequired
}

export default Pagination
