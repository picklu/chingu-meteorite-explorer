import React, { Component } from 'react';

export default class DataRow extends Component {
  render() {
    const meteorites = this.props.meteorites;
    const category = this.props.category;
    const rows = [];
    let idx = 0;
    for (let meteorite of meteorites) {
      rows.push(
        <tr key={`table-body-row-${++idx}`}>
          {category.map((el, id) => {
            const dataText =
              el === 'year'
                ? new Date(meteorite[el]).getFullYear()
                : el === 'geolocation'
                ? `(${meteorite[el].latitude}, ${meteorite[el].longitude})`
                : meteorite[el];
            return (
              <td key={`table-body-row-${idx}-col-${id + 1}`}>{dataText}</td>
            );
          })}
        </tr>
      );
    }

    return <>{rows}</>;
  }
}
