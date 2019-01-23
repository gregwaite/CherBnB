import React from 'react';
import ReactDOM from 'react-dom';
import {logout, login, signup} from "./util/session_api_util";
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();

  // debugger
  window.logout = logout;
  window.login = login;
  window.signup = signup;
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  ReactDOM.render(<h1>Welcome to CherBnB</h1>, root);
});