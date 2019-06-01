import React, { Component } from 'react';
import Page from './GoTo/Page';
import FirstPage from './GoTo/FirstPage';
import LastPage from './GoTo/LastPage';
import NextPage from './GoTo/NextPage';
import PreviousPage from './GoTo/PreviousPage';

export default class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1
    };

    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(gotToPage, pageType) {
    this.setState({ activePage: gotToPage });
    this.props.onPageChange(gotToPage);
  }

  render() {
    const pageType = {
      numbered: 'numbered',
      first: 'first',
      last: 'last',
      previous: 'previous',
      next: 'next'
    };
    const itemsCountPerPage = this.props.itemsCountPerPage;
    const totalItemsCount = this.props.totalItemsCount;
    const pageRangeDisplayed = this.pageRangeDisplayed;
    const activePage = this.state.activePage;
    const totalNumPages = Math.ceil(totalItemsCount / itemsCountPerPage);
    const pages = [];
    for (let i = activePage; i <= totalNumPages; i++) {
      pages.push[i];
    }

    return (
      <ul className={this.props.PaginationClass}>
        <FirstPage />
        <PreviousPage />
        {pages.map((page, idx) => {
          <Page
            key={`page-${idx}`}
            activePage={this.state.activePage}
            pageType={numbered}
            gotToPage={page}
            displayValue={page}
            pageListClass={this.props.pageListClass}
            pageLinkClass={this.props.pageLinkClass}
            handlePageChange={this.handlePageChange}
          />;
        })}
        <NextPage />
        <LastPage />
      </ul>
    );
  }
}
