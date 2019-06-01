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
    return (
      <ul className={this.props.PaginationClass}>
        <FirstPage />
        <PreviousPage />
        {this.porps.pageRangeDisplayed.map((page, idx) => {
          <Page key={`page-${idx}`} />;
        })}
        <NextPage />
        <LastPage />
      </ul>
    );
  }
}

// activePage={this.state.activePage}
// itemsCountPerPage={10}
// totalItemsCount={4500}
// pageRangeDisplayed={3}
