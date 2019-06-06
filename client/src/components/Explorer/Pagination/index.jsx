import React, { Component } from 'react';
import Page from './Page';

export default class Pagination extends Component {
  render() {
    const pageTypes = {
      numbered: 'numbered',
      first: 'first',
      last: 'last',
      previous: 'previous',
      next: 'next',
      empty: 'empty'
    };
    const itemsCountPerPage = this.props.itemsCountPerPage;
    const totalItemsCount = this.props.totalItemsCount;
    const pageRangeDisplayed = this.props.pageRangeDisplayed;
    const activePage = this.props.activePage;
    const activeRange = this.props.activeRange;
    const totalNumPages = Math.ceil(totalItemsCount / itemsCountPerPage);
    // Create array of page numbers
    let pages = [];
    let i =
      totalNumPages - activeRange < pageRangeDisplayed
        ? totalNumPages - pageRangeDisplayed + 1
        : activeRange;
    for (; i <= totalNumPages; i++) {
      if (i > 0) {
        pages.push(i);
      } else {
        pages.push('');
      }
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
      handlePageChange: this.props.handlePageChange
    };

    return (
      <ul className={this.props.PaginationClass}>
        <Page
          pageType={pageTypes.first}
          goToPage={1}
          totalNumPages={totalNumPages}
          handleRangeChange={this.props.handleRangeChange}
          {...commonProps}
        />
        <Page
          pageType={pageTypes.previous}
          totalNumPages={totalNumPages}
          goToPage={
            this.props.activePage - 1 > 1 ? this.props.activePage - 1 : 1
          }
          handleRangeChange={this.props.handleRangeChange}
          {...commonProps}
        />
        {pages.map((page, idx) => {
          return (
            <Page
              key={`page-${idx}`}
              pageType={page === '' ? pageTypes.empty : pageTypes.numbered}
              totalNumPages={totalNumPages}
              goToPage={page}
              {...commonProps}
            />
          );
        })}
        <Page
          pageType={pageTypes.next}
          totalNumPages={totalNumPages}
          goToPage={
            this.props.activePage + 1 < totalNumPages
              ? this.props.activePage + 1
              : totalNumPages
          }
          handleRangeChange={this.props.handleRangeChange}
          {...commonProps}
        />
        <Page
          pageType={pageTypes.last}
          totalNumPages={totalNumPages}
          goToPage={totalNumPages}
          handleRangeChange={this.props.handleRangeChange}
          {...commonProps}
        />
      </ul>
    );
  }
}
