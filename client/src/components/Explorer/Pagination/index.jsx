import React, { Component } from 'react';
import Page from './GoTo/Page';

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
    const pageTypes = {
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

    const commonProps = {
      activePage,
      pageListClass: this.props.pageListClass,
      pageLinkClass: this.props.pageLinkClass,
      handlePageChange: this.handlePageChange
    };

    return (
      <ul className={this.props.PaginationClass}>
        <Page pageType={pageTypes.FirstPage} goToPage={1} {...commonProps} />
        <Page
          pageType={pageTypes.PreviousPage}
          goToPage={
            this.state.activePage - 1 > 1 ? this.state.activePage - 1 : 1
          }
          {...commonProps}
        />
        {pages.map((page, idx) => {
          return (
            <Page
              key={`page-${idx}`}
              pageType={pageTypes.numbered}
              goToPage={page}
              {...commonProps}
            />
          );
        })}
        <Page
          pageType={pageTypes.NextPage}
          goToPage={
            this.state.activePage + 1 < totalItemsCount
              ? this.state.activePage + 1
              : totalItemsCount
          }
          {...commonProps}
        />
        <Page
          pageType={pageTypes.LastPage}
          goToPage={totalItemsCount}
          {...commonProps}
        />
      </ul>
    );
  }
}
