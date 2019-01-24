import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';

const Greeting = ({currentUser, logout}) => {
  const sessionLinks = () => {
    return (
      <nav className="login-signup">
        <button onClick={() => dispatch(openModal('login'))}>
          Log in sugar
        </button>
        <br/>
        <button onClick={() => dispatch(openModal('signup'))}>
          Sign Up Honey
        </button>
      </nav>
    );
  };

  const personalGreeting = () => {
    return (
      <hgroup className="header-group">
        <h2 className="header-name">
          Hello, {currentUser.username}. Care to find life after love?
        </h2>
        <br/>
        <button className="header-button" onClick={logout}>Logout</button>
      </hgroup>
    );
  }

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;