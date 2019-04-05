import React, {Component} from 'react';

import withAuth from './login/withAuth';

import Header from './header/Header';

class App extends Component {
  render () {
    return <Header />;
  }
}

export default withAuth (App);
