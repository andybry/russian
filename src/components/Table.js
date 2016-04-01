import React from 'react'

export default ({ rows, columnNames, startIndex }) => (
  <table>
    <thead>
      <tr>
        <th>Position</th>
        {columnNames.map((name) => <th key={name}>{name}</th>)}
      </tr>
    </thead>
    <tbody>
      {rows.map((cellByColumn, index) => (
        <tr key={index}>
          <td>{startIndex + index + 1}</td>
          {columnNames.map((name) => <td key={name}>{cellByColumn[name]}</td>)}
        </tr>
      ))}
    </tbody>
  </table>
)