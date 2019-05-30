import React, { Component } from 'react';

export default class DataCategory extends Component {
  render() {
    const category = this.props.category;
    return (
      <tr>
        {category.map((row, id) => {
          return (
            <td
              className={`td-col-${id + 1}`}
              key={`table-header-col-${id + 1}`}
            >
              {row === 'mass' ? `${row.toUpperCase()} (g)` : row.toUpperCase()}
            </td>
          );
        })}
      </tr>
    );
  }
}
