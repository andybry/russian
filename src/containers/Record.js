import { PropTypes } from 'react'
import { connect } from 'react-redux'
import Record from '../components/Record'
import * as actions from '../actions/records'

const mapStateToProps = (state, ownProps) => {
  const { lemmas } = state
  const { lemma } = ownProps
  const index = lemmas.findIndex(el => el.lemma === lemma)
  return {
    ...lemmas[index],
    position: index + 1,
    record: state.records[lemma] || {}
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { lemma } = ownProps
  return {
    onChange: (e) => {
      e.preventDefault()
      const { name, value } = e.target
      dispatch(actions.recordChanged(lemma, name, value))
    }
  }
}

const RecordContainer = connect(mapStateToProps, mapDispatchToProps)(Record)

RecordContainer.propTypes = {
  lemma: PropTypes.string.isRequired
}

export default RecordContainer
