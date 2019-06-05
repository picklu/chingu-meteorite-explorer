import React, { Component } from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

export default class MeteoriteTable extends Component {
  render() {
    const regx = new RegExp(this.props.filterText, 'gi');
    const meteorites = this.props.meteorites.filter(meteorite =>
      meteorite.name.match(regx)
    );
    const categories = [
      'name',
      'id',
      'nametype',
      'recclass',
      'mass',
      'fall',
      'year',
      'geolocation'
    ];

    return (
      <table className="table">
        <TableHeader categories={categories} />
        <TableBody
          categories={categories}
          meteorites={meteorites}
          initialRow={this.props.initialRow}
          itemsCountPerPage={this.props.itemsCountPerPage}
        />
      </table>
    );
  }
}
