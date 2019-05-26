import React, { Component } from 'react';
import Layout from './layout';
import Explorer from './components/explorer';
import '../public/scss/main.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <Explorer />
      </Layout>
    );
  }
}
