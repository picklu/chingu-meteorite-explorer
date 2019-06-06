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
    const totalNumPages = this.props.totalNumPages;
    let classNames = this.props.pageListClass;
    let displayValue;
    switch (pageType) {
      case pageTypes.numbered:
        displayValue = this.props.goToPage;
        classNames += ' pagination__numbered';
        if (this.props.activePage === this.props.goToPage) {
          classNames += ' active';
        }
        break;
      case pageTypes.first:
        displayValue = '<<';
        classNames += ' pagination__btn';
        if (this.props.activePage === this.props.goToPage) {
          classNames += ' muted';
        }
        break;
      case pageTypes.previous:
        displayValue = '<';
        classNames += ' pagination__btn';
        if (this.props.goToPage === 1 && this.props.activePage === 1) {
          classNames += ' muted';
        }
        break;
      case pageTypes.next:
        displayValue = '>';
        classNames += ' pagination__btn';
        if (
          this.props.goToPage === totalNumPages &&
          this.props.activePage === totalNumPages
        ) {
          classNames += ' muted';
        }
        break;
      case pageTypes.last:
        displayValue = '>>';
        classNames += ' pagination__btn';
        if (this.props.activePage === this.props.goToPage) {
          classNames += ' muted';
        }
        break;
      case pageTypes.empty:
        displayValue = '';
        classNames += ' muted';
        break;
      default:
        displayValue = 'error';
        break;
    }
    return (
      <li className={classNames} onClick={this.handleClick}>
        <a className={this.props.pageLinkClass} href="#">
          {displayValue}
        </a>
      </li>
    );
  }
}
