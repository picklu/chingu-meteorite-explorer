import React, { Component } from 'react';

export default class Page extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const goToPage = this.props.goToPage;
    this.props.handlePageChange(goToPage);
    if (this.props.pageType !== this.props.pageTypes.numbered) {
      this.props.handleRangeChange(goToPage);
    }
  }

  render() {
    const pageType = this.props.pageType;
    const pageTypes = this.props.pageTypes;
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
    let classNames =
      this.props.activePage === this.props.goToPage &&
      pageType === pageTypes.numbered
        ? `${this.props.pageListClass} active`
        : this.props.pageListClass;
    classNames =
      pageType !== pageTypes.numbered
        ? classNames + ' pagination__btn'
        : classNames;
    return (
      <li className={classNames} onClick={this.handleClick}>
        <a className={this.props.pageLinkClass} href="#">
          {displayValue}
        </a>
      </li>
    );
  }
}
