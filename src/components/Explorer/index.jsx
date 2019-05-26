import React, { Component } from 'react';
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
        <MeteoriteTable
          category={this.props.category}
          meteorites={this.props.meteorites}
        />
      </div>
    );
  }
}
