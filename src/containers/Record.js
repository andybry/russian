import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

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

const mapStateToProps = (state, ownProps) => {
  const { lemmas } = state
  const { lemma } = ownProps
  const index = lemmas.findIndex(el => el.lemma === lemma)
  return {
    ...lemmas[index],
    position: index + 1
  }
}
export default connect(mapStateToProps)(Record)
