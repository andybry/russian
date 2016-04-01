import React from 'react'

export default ({ rows, keys }) => (
  <table>
    <thead>
      <tr>
        <th>Position</th>
        {keys.map((key) => <th key={key}>{key}</th>)}
      </tr>
    </thead>
    <tbody>
      {rows.map((cellByKey, index) => (
        <tr key={index}>
          <td>{index + 1}</td>
          {keys.map((key) => <td key={key}>{cellByKey[key]}</td>)}
        </tr>
      ))}
    </tbody>
  </table>
)