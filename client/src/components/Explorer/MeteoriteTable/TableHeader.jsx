import React, { Component } from 'react';

export default class TableHeader extends Component {
  render() {
    return (
      <thead className="thead">
        <tr>
          {this.props.categories.map((row, id) => {
            return (
              <td className={`td-col-${id + 1}`} key={`thead-col-${id + 1}`}>
                {row === 'mass'
                  ? `${row.toUpperCase()} (g)`
                  : row.toUpperCase()}
              </td>
            );
          })}
        </tr>
      </thead>
    );
  }
}
