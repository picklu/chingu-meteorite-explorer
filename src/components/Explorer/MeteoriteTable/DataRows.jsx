import React, { Component } from 'react';
import DataRow from './DataRow';

export default class DataRows extends Component {
  render() {
    const filterText = this.props.filterText;
    const category = this.props.category;
    const regx = new RegExp(filterText, 'gi');
    const rows = [];
    let rowNum = 0;
    this.props.meteorites.forEach(meteorite => {
      if (!meteorite.name.match(regx)) {
        return;
      }
      rows.push(
        <DataRow
          key={`data-row-${++rowNum}`}
          rowNum={rowNum}
          category={category}
          meteorite={meteorite}
        />
      );
    });

    return <>{rows}</>;
  }
}
