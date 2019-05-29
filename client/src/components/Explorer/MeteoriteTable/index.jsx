import React, { Component } from 'react';
import DataCategory from './DataCategory';
import DataRows from './DataRows';

export default class MeteoriteTable extends Component {
  render() {
    return (
      <table>
        <thead>
          <DataCategory category={this.props.category} />
        </thead>
        <tbody>
          <DataRows
            category={this.props.category}
            meteorites={this.props.meteorites}
            filterText={this.props.filterText}
          />
        </tbody>
      </table>
    );
  }
}
