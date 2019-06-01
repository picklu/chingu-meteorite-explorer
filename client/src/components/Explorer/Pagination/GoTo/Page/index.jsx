import React, { Component } from 'react';

export default class Page extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const goToPage = this.props.goToPage;
    const pageType = this.props.pageType;
    this.props.handlePageChange(goToPage, pageType);
  }

  render() {
    const pageTypes = {
      numbered: 'numbered',
      first: 'first',
      last: 'last',
      previous: 'previous',
      next: 'next'
    };
    const pageType = this.props.pageType;
    let displayValue;
    switch (pageType) {
      case pageTypes.numbered:
        displayValue = this.props.goToPage;
        break;
      case pageTypes.first:
        displayValue = '<<';
        break;
      case pageTypes.previous:
        displayValue = '<';
        break;
      case pageTypes.next:
        displayValue = '>';
        break;
      case pageTypes.last:
        displayValue = '>>';
        break;
      default:
        displayValue = 'error';
        break;
    }
    const classNames =
      this.props.activePage === this.props.goToPage
        ? `${this.props.pageListClass} active`
        : this.props.pageListClass;
    console.log(this.props.displayValue);
    return (
      <li className={classNames} onClick={this.handleClick}>
        <a className={this.props.pageLinkClass} href="#">
          {displayValue}
        </a>
      </li>
    );
  }
}
