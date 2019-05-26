import React, { Component } from 'react';
import MeteoriteSearch from './MeteoriteSearch';
import MeteoriteTable from './MeteoriteTable';

export default class Explorer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: ''
    };

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  render() {
    return (
      <div className="explorer">
        <MeteoriteSearch
          filterText={this.state.filterText}
          onFilterTextChange={this.handleFilterTextChange}
        />
        <MeteoriteTable
          category={this.props.category}
          filterText={this.state.filterText}
          meteorites={this.props.meteorites}
        />
      </div>
    );
  }
}
