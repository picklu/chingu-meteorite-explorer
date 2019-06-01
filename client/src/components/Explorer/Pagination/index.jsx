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

  handlePageChange(goToPage, pageType) {
    this.setState({ activePage: goToPage });
    this.props.onPageChange(goToPage);
    console.log(pageType);
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
    const pageRangeDisplayed = this.props.pageRangeDisplayed;
    const activePage = this.state.activePage;
    const totalNumPages = Math.ceil(totalItemsCount / itemsCountPerPage);
    // Create array of page numbers
    let pages = [];
    for (let i = activePage; i <= totalNumPages; i++) {
      pages.push(i);
    }
    // Filter the page numbers according to pageRangeDisplayed
    pages = pages.filter((page, idx) => {
      return idx < pageRangeDisplayed;
    });

    return (
      <ul className={this.props.PaginationClass}>
        <FirstPage />
        <PreviousPage />
        {pages.map((page, idx) => {
          return (
            <Page
              key={`page-${idx}`}
              activePage={activePage}
              pageType={pageType.numbered}
              goToPage={page}
              displayValue={page}
              pageListClass={this.props.pageListClass}
              pageLinkClass={this.props.pageLinkClass}
              handlePageChange={this.handlePageChange}
            />
          );
        })}
        <NextPage />
        <LastPage />
      </ul>
    );
  }
}
