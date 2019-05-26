import React, { Component } from 'react';

export default class DataRow extends Component {
  render() {
    const category = this.props.category;
    const meteorite = this.props.meteorite;
    const row = this.props.row;

    return (
      <tr key={`table-body-row-${row}`}>
        {category.map((el, id) => {
          const dataText =
            el === 'year'
              ? new Date(meteorite[el]).getFullYear()
              : el === 'geolocation'
              ? `(${meteorite[el].latitude}, ${meteorite[el].longitude})`
              : meteorite[el];
          return (
            <td key={`table-body-row-${row}-col-${id + 1}`}>{dataText}</td>
          );
        })}
      </tr>
    );
  }
}
