import React, { Component } from 'react';
import Loader from 'react-loader-spinner';

export default class Spinner extends Component {
  render() {
    return (
      <div className="loader">
        <Loader type="Hearts" color="#1a6eb3" height="100" width="100" />
      </div>
    );
  }
}
