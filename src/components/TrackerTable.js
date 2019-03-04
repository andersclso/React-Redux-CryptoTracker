import React from 'react';
import TableDataRow from './TableDataRow';

export default function TrackerTable(props) {
  let table_content = props.content.map(currency => <TableDataRow
                                              key={ currency.symbol }
                                              rank={ currency.cmc_rank }
                                              symbol={ currency.symbol }
                                              price={ currency.quote.USD.price }
                                              remove={ props.remove }
                                              />);

  return (
    <div className="table-wrapper">
      <h2>Cryptocurrency Tracker</h2>
      <table>
        <tr className="categories">
          <th onClick={props.sortByRank}>Rank</th>
          <th>Symbol</th>
          <th onClick={props.sortByPrice}>Price (USD)</th>
        </tr>
        { table_content }
      </table>
    </div>
  )
}
