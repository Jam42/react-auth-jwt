import React, {Component} from 'react';
import AuthService from '../login/AuthService';

const Auth = new AuthService ();

export default class Login extends Component {
  handleLogout () {
    Auth.logout ();
    this.props.history.replace ('/login');
  }

  render () {
    return (
      <button onClick={this.handleLogout.bind (this)}>
        Logout
      </button>
    );
  }
}
