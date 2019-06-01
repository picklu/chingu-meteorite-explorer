import React, { Component } from 'react';

export default class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1
    };

    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(gotToPage, pageType) {
    this.setState({ activePage: page });
  }

  render() {
    itemsCountPerPage = this.props.itemsCountPerPage;
    totalItemsCount = this.props.totalItemsCount;
    pageRangeDisplayed = this.pageRangeDisplayed;

    return (
      <ul className={this.props.PaginationClass}>
        <FirstPage />
        <PreviousPage />
        {this.porps.pageRangeDisplayed.map((page, idx) => {
          <Page key={`page-${idx}`} activePage={this.state.activePage} />;
        })}
        <NextPage />
        <LastPage />
      </ul>
    );
  }
}
