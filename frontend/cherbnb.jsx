import React from 'react';
import ReactDOM from 'react-dom';
import {logout, login, signup} from "./util/session_api_util";

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  window.logout = logout;
  window.login = login;
  window.signup = signup;

  ReactDOM.render(<h1>Welcome to CherBnB</h1>, root);
});