/**
 * @flow
 */

import React, { Component } from 'react';
import './app-loader.scss';
import RootRouter from './_web/js/router/root';


class App extends Component {
  render() {
    return (
        <RootRouter />
    );
  }
}

export default App;
