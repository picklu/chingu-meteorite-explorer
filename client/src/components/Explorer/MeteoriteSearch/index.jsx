import React, { Component } from 'react';

export default class MeteoriteSearch extends Component {
  constructor(props) {
    super(props);

    this.handleInputTextChange = this.handleInputTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputTextChange(e) {
    const inputVal = e.target.value;
    this.props.onInputTextChange(inputVal);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onFilterTextChange();
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <div className="row form__row">
          <div className="form__group form__group--input">
            <input
              id="query"
              type="text"
              className="form__control--input"
              placeholder="Search a meteorite ..."
              value={this.props.inputText}
              onChange={this.handleInputTextChange}
            />
          </div>
          <div className="form__group form__group--btn">
            <button type="submit" className="btn btn__form form__control--btn">
              Search
            </button>
          </div>
        </div>
      </form>
    );
  }
}
