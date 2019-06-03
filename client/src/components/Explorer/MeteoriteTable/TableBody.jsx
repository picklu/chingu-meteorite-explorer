import React, { Component } from 'react';
import TableRow from './TableRow';

export default class TableBody extends Component {
  render() {
    const initialRow = this.props.initialRow;
    const finalRow = initialRow + this.props.itemsCountPerPage;
    const meteorites = this.props.meteorites.slice(initialRow, finalRow);
    return (
      <tbody className="tbody">
        {meteorites.map((meteorite, rowNum) => {
          return (
            <TableRow
              key={`data-row-${rowNum + 1}`}
              rowNum={rowNum + 1}
              categories={this.props.categories}
              meteorite={meteorite}
            />
          );
        })}
      </tbody>
    );
  }
}
