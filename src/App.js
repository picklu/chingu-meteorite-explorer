import React, { Component } from 'react';
import Layout from './layout';
import '../public/scss/main.scss';

const hello = <h1>Hello, World!</h1>; // for testing
export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Layout color="hello">{hello}</Layout>
      </>
    );
  }
}
