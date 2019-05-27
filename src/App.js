import React, { Component } from 'react';
import axios from 'axios';
import { apiURL } from '../config.js';
import Layout from './layout';
import Explorer from './components/Explorer';
import '../public/scss/main.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meteorites: [],
      success: false
    };
  }
  componentDidMount() {
    axios
      .get(apiURL)
      .then(response => {
        this.setState({
          meteorites: response.data.slice(0, 10),
          success: true
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const category = [
      'name',
      'id',
      'nametype',
      'recclass',
      'mass',
      'fall',
      'year',
      'geolocation'
    ];

    return (
      <Layout>
        <Explorer
          category={category}
          meteorites={this.state.meteorites}
          success={this.state.success}
        />
      </Layout>
    );
  }
}
