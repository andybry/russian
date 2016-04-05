import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import Table from '../components/Table'

const renderBack = (urlFunction, pages) => {
  if (pages.current === 1) return null
  return <Link to={urlFunction(pages.current - 1)}>Back</Link>
}

const renderForward = (urlFunction, pages) => {
  if (pages.current === pages.total) return null
  return <Link to={urlFunction(pages.current + 1)}>Forward</Link>
}

const Listing = ({
  rows, columnNames, startIndex, pages, urlFunction
}) => (
  <div>
    <Table { ...{ rows, columnNames, startIndex } } />
    {renderBack(urlFunction, pages)}
    <span>{ pages.current } / { pages.total }</span>
    {renderForward(urlFunction, pages)}
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

export default Listing
