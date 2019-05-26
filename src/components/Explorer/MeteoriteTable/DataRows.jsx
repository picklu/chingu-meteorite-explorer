import React, { Component } from 'react';
import DataRow from './DataRow';

export default class DataRows extends Component {
  render() {
    const filterText = ''; // this.props.filterText;
    const category = this.props.category;
    const meteorites = this.props.meteorites;
    const rows = [];
    let idx = 0;
    meteorites.forEach(meteorite => {
      window.filterText = filterText;
      if (meteorite.name.indexOf(filterText) === -1) {
        return;
      }
      rows.push(
        <DataRow
          key={`data-row-${++idx}`}
          row={idx}
          category={category}
          meteorite={meteorite}
        />
      );
    });

    return <>{rows}</>;
  }
}
