import React, { Component } from 'react';

export default class Page extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const goToPage = parseInt(this.props.goToPage, 10);
    const pageType = this.props.pageType;
    this.props.handlePageChange(goToPage, pageType);
  }

  render() {
    const classNames =
      this.props.activePage === this.props.goToPage
        ? `${this.props.pageListClass} active`
        : this.props.pageListClass;
    console.log(this.props.displayValue);
    return (
      <>
        <li className={classNames} onClick={this.handleClick}>
          <a className={this.props.pageLinkClass} href="#">
            {this.props.displayValue}
          </a>
        </li>
      </>
    );
  }
}
