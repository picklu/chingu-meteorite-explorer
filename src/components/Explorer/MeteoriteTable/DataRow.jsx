import React, { Component } from 'react';

export default class DataRow extends Component {
  render() {
    const category = this.props.category;
    const meteorite = this.props.meteorite;
    const rowNum = this.props.rowNum;

    return (
      <tr key={`table-body-row-${rowNum}`}>
        {category.map((el, colNum) => {
          const dataText =
            el === 'year'
              ? new Date(meteorite[el]).getFullYear()
              : el === 'geolocation'
              ? `(${meteorite[el].latitude}, ${meteorite[el].longitude})`
              : meteorite[el] === undefined
              ? 'Unknown'
              : meteorite[el];
          return (
            <td key={`table-body-row-${rowNum}-col-${colNum + 1}`}>
              {dataText}
            </td>
          );
        })}
      </tr>
    );
  }
}
