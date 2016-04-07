import React, { PropTypes } from 'react'

const Record = ({ lemma, record, position, part, onChange }) => (
  <div>
    <h1>{ lemma }</h1>
    <dl>
      <dt>Position: </dt>
      <dd>{ position }</dd>
      <dt>Part of speech: </dt>
      <dd>{ part }</dd>
    </dl>
    <form onSubmit={e => e.preventDefault()}>
      <label htmlFor="meaning">Meaning</label>
      <input
        id="meaning" name="meaning"
        type="text" onChange={onChange} value={record.meaning}
      />
    </form>
  </div>
)

Record.propTypes = {
  lemma: PropTypes.string.isRequired,
  position: PropTypes.number.isRequired,
  part: PropTypes.string.isRequired,
  record: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Record
