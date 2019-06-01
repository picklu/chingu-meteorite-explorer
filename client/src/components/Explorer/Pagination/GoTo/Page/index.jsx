import React, { Component } from 'react';

export default class Page extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const pageLink = event.target.closes(this.props.pageLinkClass);
    const goToPage = parseInt(pageLink.dataset.goToPage, 10);
    this.props.handlePageChange(goToPage);
  }

  render() {
    return (
      <>
        <li className={this.props.pageListClass} onClick={this.handleClick}>
          <a
            className={this.props.pageLinkClass}
            href="#"
            data-type={this.props.pageType}
            data-value={this.props.gotToPage}
          >
            {this.props.displayValue}
          </a>
        </li>
      </>
    );
  }
}
