import React, { Component } from 'react';
import Page from './Page';

export default class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
      activeRnage: 0
    };

    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleRangeChange = this.handleRangeChange.bind(this);
  }

  handlePageChange(goToPage) {
    this.setState({ activePage: goToPage });
    this.props.onPageChange(goToPage);
  }

  handleRangeChange(goToRange) {
    this.setState({ activeRnage: goToRange });
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
    let i =
      totalNumPages - activePage < pageRangeDisplayed
        ? totalNumPages - pageRangeDisplayed + 1
        : activePage;
    for (; i <= totalNumPages; i++) {
      pages.push(i);
    }
    // Filter the page numbers according to pageRangeDisplayed
    pages = pages.filter((_, idx) => {
      return idx < pageRangeDisplayed;
    });

    const commonProps = {
      pageTypes,
      activePage,
      pageListClass: this.props.pageListClass,
      pageLinkClass: this.props.pageLinkClass,
      handlePageChange: this.handlePageChange
    };

    return (
      <ul className={this.props.PaginationClass}>
        <Page
          pageType={pageTypes.first}
          goToPage={1}
          activeRnage={this.state.activeRnage}
          handleRangeChange={this.handleRangeChange}
          {...commonProps}
        />
        <Page
          pageType={pageTypes.previous}
          activeRnage={this.state.activeRnage}
          goToPage={
            this.state.activePage - 1 > 1 ? this.state.activePage - 1 : 1
          }
          handleRangeChange={this.handleRangeChange}
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
          pageType={pageTypes.next}
          activeRnage={this.state.activeRnage}
          goToPage={
            this.state.activePage + 1 < totalNumPages
              ? this.state.activePage + 1
              : totalNumPages
          }
          handleRangeChange={this.handleRangeChange}
          {...commonProps}
        />
        <Page
          pageType={pageTypes.last}
          activeRnage={this.state.activeRnage}
          goToPage={totalNumPages}
          handleRangeChange={this.handleRangeChange}
          {...commonProps}
        />
      </ul>
    );
  }
}
