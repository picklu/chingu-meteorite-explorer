import React, { Component } from 'react';
import MeteoriteSearch from './MeteoriteSearch';
import MeteoriteTable from './MeteoriteTable';
import Pagination from './Pagination';
import Spinner from '../Spinner';

export default class Explorer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      filterText: '',
      initialRow: 0
    };

    this.handleInputTextChange = this.handleInputTextChange.bind(this);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.onPageChange = this.onPageChange.bind(this);
    window.state = this.state;
  }

  handleInputTextChange(inputText) {
    this.setState({
      inputText: inputText
    });
  }

  handleFilterTextChange() {
    this.setState({
      inputText: this.state.inputText,
      filterText: this.state.inputText
    });
  }

  onPageChange(goToPage) {
    this.setState({
      initialRow: (goToPage - 1) * 20
    });
  }

  render() {
    const itemsCountPerPage = 20;
    const pageRangeDisplayed = 5;
    const totalItemsCount = this.props.meteorites.length;

    if (this.props.isLoading) {
      return (
        <div className="explorer">
          <MeteoriteSearch
            filterText={this.state.filterText}
            inputText={this.state.inputText}
            onInputTextChange={this.handleInputTextChange}
            onFilterTextChange={this.handleFilterTextChange}
          />
          <Spinner />
        </div>
      );
    }
    return (
      <div className="explorer">
        <MeteoriteSearch
          filterText={this.state.filterText}
          inputText={this.state.inputText}
          onInputTextChange={this.handleInputTextChange}
          onFilterTextChange={this.handleFilterTextChange}
        />
        <MeteoriteTable
          filterText={this.state.filterText}
          meteorites={this.props.meteorites}
          initialRow={this.state.initialRow}
          itemsCountPerPage={itemsCountPerPage}
        />
        <Pagination
          itemsCountPerPage={itemsCountPerPage}
          totalItemsCount={totalItemsCount}
          pageRangeDisplayed={pageRangeDisplayed}
          PaginationClass="pagination"
          pageListClass="pagination__list"
          pageLinkClass="pagination__list--link"
          onPageChange={this.onPageChange}
        />
      </div>
    );
  }
}
