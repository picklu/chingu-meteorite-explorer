import React, { Component } from 'react';
import DataRow from './DataRow';

export default class DataRows extends Component {
  render() {
    const regx = new RegExp(this.props.filterText, 'gi');
    const category = this.props.category;
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
