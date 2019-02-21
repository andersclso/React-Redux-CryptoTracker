import React from 'react';

export default function TableDataRow(props) {
  return (
    <tr className="data-row" value={props.symbol} onClick={props.remove}>
      <td>{props.rank}</td>
      <td>{props.symbol}</td>
      <td>${props.price.toFixed(2)}</td>
    </tr>
  )
}
