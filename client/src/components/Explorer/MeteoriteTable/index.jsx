import React, { Component } from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

export default class MeteoriteTable extends Component {
  render() {
    return (
      <table className="table">
        <TableHeader categories={this.props.categories} />
        <TableBody
          categories={this.props.categories}
          meteorites={this.props.meteorites}
        />
      </table>
    );
  }
}
