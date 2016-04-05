import React, { PropTypes } from 'react'

const Record = ({ lemma, position, part }) => (
  <div>
    <h1>{ lemma }</h1>
    <dl>
      <dt>Position: </dt>
      <dd>{ position }</dd>
      <dt>Part of speech: </dt>
      <dd>{ part }</dd>
    </dl>
  </div>
)

Record.propTypes = {
  lemma: PropTypes.string.isRequired,
  position: PropTypes.number.isRequired,
  part: PropTypes.string.isRequired
}

export default Record
