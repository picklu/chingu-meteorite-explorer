import React, { Component } from 'react';

export default class MeteoriteSearch extends Component {
  constructor(props) {
    super(props);

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  render() {
    return (
      <form className="form">
        <div class="row form__row">
          <div class="form__group form__group--input">
            <input
              id="query"
              type="text"
              class="form__control--input"
              placeholder="Search a meteorite ..."
              value={this.props.filterText}
              onChange={this.handleFilterTextChange}
            />
          </div>
        </div>
      </form>
    );
  }
}
