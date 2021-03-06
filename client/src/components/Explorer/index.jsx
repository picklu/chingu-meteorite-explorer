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
      activePage: 1,
      activeRange: 1,
      initialRow: 0
    };

    this.handleInputTextChange = this.handleInputTextChange.bind(this);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleRangeChange = this.handleRangeChange.bind(this);
    this.onPageChange = this.onPageChange.bind(this);
    window.state = this.state;
  }

  handleInputTextChange(inputText) {
    if (this.state.inputText.length > inputText.length) {
      this.setState({
        inputText: inputText,
        filterText: inputText,
        activePage: 1,
        activeRange: 1,
        initialRow: 0
      });
    } else {
      this.setState({
        inputText: inputText
      });
    }
  }

  handleFilterTextChange() {
    this.setState({
      inputText: this.state.inputText,
      filterText: this.state.inputText,
      activePage: 1,
      activeRange: 1,
      initialRow: 0
    });
  }

  handlePageChange(goToPage) {
    this.setState({ activePage: goToPage });
    this.onPageChange(goToPage);
  }

  handleRangeChange(goToRange) {
    this.setState({ activeRange: goToRange });
  }

  onPageChange(goToPage) {
    this.setState({
      initialRow: (goToPage - 1) * 20
    });
  }

  render() {
    const itemsCountPerPage = 20;
    const pageRangeDisplayed = 5;
    const initialRow = this.state.initialRow;
    const finalRow = initialRow + itemsCountPerPage;
    const filterText = this.state.filterText || '.*';
    const regx = new RegExp(filterText, 'gi');
    const meteorites = this.props.meteorites.filter(meteorite =>
      meteorite.name.match(regx)
    );
    const displayMeteorites = meteorites.slice(initialRow, finalRow);
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
          categories={categories}
          filterText={this.state.filterText}
          meteorites={displayMeteorites}
          initialRow={this.state.initialRow}
          itemsCountPerPage={itemsCountPerPage}
        />
        <Pagination
          itemsCountPerPage={itemsCountPerPage}
          totalItemsCount={meteorites.length}
          pageRangeDisplayed={pageRangeDisplayed}
          activePage={this.state.activePage}
          activeRange={this.state.activeRange}
          PaginationClass="pagination"
          pageListClass="pagination__list"
          pageLinkClass="pagination__list--link"
          onPageChange={this.onPageChange}
          handlePageChange={this.handlePageChange}
          handleRangeChange={this.handleRangeChange}
        />
      </div>
    );
  }
}
