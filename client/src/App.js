import React, { Component } from 'react';
import axios from 'axios';
import { apiURL } from '../../config.js';
import Layout from './layout';
import Explorer from './components/Explorer';
import '../public/scss/main.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meteorites: [],
      success: false,
      isLoading: true
    };

    this.handleStartLoading = this.handleStartLoading.bind(this);
    // this.handleStopLoading = this.handleStopLoading.bind(this);
  }

//   handleStartLoading() {
//     this.setState({
//       meteorites: this.state.meteorites,
//       success: this.state.success,
//       isLoading: true
//     });
//   }

  // handleStopLoading() {
  //   this.setState({
  //     meteorites: this.state.meteorites,
  //     success: this.state.success,
  //     isLoading: false
  //   });
  // }

  componentDidMount() {
    axios
      .get(apiURL)
      .then(response => {
        this.setState({
          meteorites: response.data,
          success: true,
          isLoading: false
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          meteorites: [],
          success: false,
          isLoading: false
        });
      });
  }

  render() {
    return (
      <Layout>
        <Explorer
          meteorites={this.state.meteorites}
          success={this.state.success}
          isLoading={this.state.isLoading}
          handleStartLoading={this.handleStartLoading}
          // handleStopLoading={this.handleStopLoading}
        />
      </Layout>
    );
  }
}
