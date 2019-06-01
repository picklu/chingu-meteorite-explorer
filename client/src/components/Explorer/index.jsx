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
      filterText: ''
    };

    this.handleInputTextChange = this.handleInputTextChange.bind(this);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.onPageChange = this.onPageChange.bind(this);
  }

  handleInputTextChange(inputText) {
    this.setState({
      inputText: inputText,
      filterText: ''
    });
  }

  handleFilterTextChange() {
    this.setState({
      inputText: this.state.inputText,
      filterText: this.state.inputText
    });
  }

  onPageChange(goToPage) {
    console.log('Go to page!');
  }

  render() {
    const props = {
      itemsCountPerPage: 20,
      totalItemsCount: 1000,
      pageRangeDisplayed: 5,
      PaginationClass: 'pagination',
      pageListClass: 'pagination__list',
      pageLinkClass: 'pagination__list--link',
      onPageChange: this.onPageChange
    };

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
        <Pagination
          itemsCountPerPage={props.itemsCountPerPage}
          totalItemsCount={props.totalItemsCount}
          pageRangeDisplayed={props.pageRangeDisplayed}
          PaginationClass={props.PaginationClass}
          pageListClass={props.pageListClass}
          pageLinkClass={props.pageLinkClass}
          onPageChange={this.onPageChange}
        />
        <MeteoriteTable
          filterText={this.state.filterText}
          meteorites={this.props.meteorites}
        />
      </div>
    );
  }
}
