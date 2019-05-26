import React, { Component } from 'react';
import DataCategory from './DataCategory';
import DataRow from './DataRow';

export default class MeteoriteTable extends Component {
  render() {
    return (
      <table>
        <thead>
          <DataCategory category={this.props.category} />
        </thead>
        <tbody>
          <DataRow
            category={this.props.category}
            meteorites={this.props.meteorites}
          />
        </tbody>
      </table>
    );
  }
}
