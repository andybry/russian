import { PropTypes } from 'react'
import { connect } from 'react-redux'
import Record from '../components/Record'

const mapStateToProps = (state, ownProps) => {
  const { lemmas } = state
  const { lemma } = ownProps
  const index = lemmas.findIndex(el => el.lemma === lemma)
  return {
    ...lemmas[index],
    position: index + 1
  }
}

const RecordContainer = connect(mapStateToProps)(Record)

RecordContainer.propTypes = {
  lemma: PropTypes.string.isRequired
}

export default RecordContainer
